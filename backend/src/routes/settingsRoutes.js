import express from "express";
import { dashboard, getSettings, updateSettings } from "../controllers/settingsController.js";
import { protect } from "../middleware/auth.js";

export const settingsRoutes = express.Router();

settingsRoutes.get("/", getSettings);
settingsRoutes.put("/", protect, updateSettings);
settingsRoutes.get("/dashboard/summary", protect, dashboard);
