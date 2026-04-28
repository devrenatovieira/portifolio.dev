import express from "express";
import {
  createProject,
  deleteProject,
  featuredProjects,
  getProjectBySlug,
  listProjects,
  updateProject
} from "../controllers/projectController.js";
import { optionalAuth, protect } from "../middleware/auth.js";

export const projectRoutes = express.Router();

projectRoutes.get("/", optionalAuth, listProjects);
projectRoutes.get("/featured", featuredProjects);
projectRoutes.get("/:slug", getProjectBySlug);
projectRoutes.post("/", protect, createProject);
projectRoutes.put("/:id", protect, updateProject);
projectRoutes.delete("/:id", protect, deleteProject);
