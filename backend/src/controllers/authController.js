import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { AppError, asyncHandler } from "../utils/errors.js";

function signToken(user) {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d"
  });
}

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError("Informe email e senha", 400);
  }

  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user || !(await user.comparePassword(password))) {
    throw new AppError("Credenciais inválidas", 401);
  }

  res.json({
    success: true,
    token: signToken(user),
    user: { id: user._id, name: user.name, email: user.email, role: user.role }
  });
});

export const me = asyncHandler(async (req, res) => {
  res.json({ success: true, user: req.user });
});

export const updateMe = asyncHandler(async (req, res) => {
  const { name, email, currentPassword, newPassword } = req.body;
  const user = await User.findById(req.user._id);

  if (!user) {
    throw new AppError("Usuário não encontrado", 404);
  }

  if (newPassword) {
    if (!currentPassword) {
      throw new AppError("Informe a senha atual para definir uma nova senha", 400);
    }

    if (!(await user.comparePassword(currentPassword))) {
      throw new AppError("Senha atual inválida", 401);
    }

    user.password = newPassword;
  }

  if (name) user.name = name;
  if (email) user.email = email.toLowerCase();

  await user.save();

  res.json({
    success: true,
    user: { id: user._id, name: user.name, email: user.email, role: user.role }
  });
});
