import express from "express";
import { login, me, updateMe } from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";

export const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.get("/me", protect, me);
authRoutes.put("/me", protect, updateMe);
