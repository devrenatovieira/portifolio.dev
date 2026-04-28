import { ContactMessage } from "../models/ContactMessage.js";
import { AppError, asyncHandler } from "../utils/errors.js";

export const createContact = asyncHandler(async (req, res) => {
  const { name, email, whatsapp, projectType, message } = req.body;
  if (!name || !email || !whatsapp || !projectType || !message) {
    throw new AppError("Preencha os campos obrigatorios", 400);
  }

  const contact = await ContactMessage.create(req.body);
  res.status(201).json({
    success: true,
    message: "Mensagem enviada com sucesso",
    data: contact
  });
});

export const listContacts = asyncHandler(async (req, res) => {
  const contacts = await ContactMessage.find().sort({ createdAt: -1 });
  res.json({ success: true, data: contacts });
});

export const getContact = asyncHandler(async (req, res) => {
  const contact = await ContactMessage.findById(req.params.id);
  if (!contact) throw new AppError("Mensagem não encontrada", 404);
  res.json({ success: true, data: contact });
});

export const markRead = asyncHandler(async (req, res) => {
  const contact = await ContactMessage.findByIdAndUpdate(
    req.params.id,
    { read: true },
    { new: true }
  );
  if (!contact) throw new AppError("Mensagem não encontrada", 404);
  res.json({ success: true, data: contact });
});

export const deleteContact = asyncHandler(async (req, res) => {
  const contact = await ContactMessage.findByIdAndDelete(req.params.id);
  if (!contact) throw new AppError("Mensagem não encontrada", 404);
  res.json({ success: true, message: "Mensagem excluída" });
});
