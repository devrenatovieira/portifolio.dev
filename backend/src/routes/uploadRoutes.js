import express from "express";
import { protect } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

export const uploadRoutes = express.Router();

uploadRoutes.post("/", protect, upload.single("image"), (req, res) => {
  res.status(201).json({
    success: true,
    url: `/uploads/${req.file.filename}`
  });
});
