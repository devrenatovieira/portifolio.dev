import express from "express";
import {
  createService,
  deleteService,
  listServices,
  updateService
} from "../controllers/serviceController.js";
import { optionalAuth, protect } from "../middleware/auth.js";

export const serviceRoutes = express.Router();

serviceRoutes.get("/", optionalAuth, listServices);
serviceRoutes.post("/", protect, createService);
serviceRoutes.put("/:id", protect, updateService);
serviceRoutes.delete("/:id", protect, deleteService);
