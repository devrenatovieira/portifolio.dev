import express from "express";
import {
  createContact,
  deleteContact,
  getContact,
  listContacts,
  markRead
} from "../controllers/contactController.js";
import { protect } from "../middleware/auth.js";

export const contactRoutes = express.Router();

contactRoutes.post("/", createContact);
contactRoutes.get("/", protect, listContacts);
contactRoutes.get("/:id", protect, getContact);
contactRoutes.patch("/:id/read", protect, markRead);
contactRoutes.delete("/:id", protect, deleteContact);
