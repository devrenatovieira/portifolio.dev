import slugify from "slugify";
import { Project } from "../models/Project.js";
import { AppError, asyncHandler } from "../utils/errors.js";

function projectPayload(body) {
  const slug = body.slug || body.name;

  return {
    ...body,
    slug: slugify(slug, { lower: true, strict: true }),
    technologies: Array.isArray(body.technologies)
      ? body.technologies
      : String(body.technologies || "")
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
    gallery: Array.isArray(body.gallery)
      ? body.gallery
      : String(body.gallery || "")
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
  };
}

export const listProjects = asyncHandler(async (req, res) => {
  const filter = req.user ? {} : { status: "publicado", active: true };
  const category = req.query.category;

  if (category && category !== "Todos") filter.category = category;

  const projects = await Project.find(filter).sort({ featured: -1, createdAt: -1 });
  res.json({ success: true, data: projects });
});

export const featuredProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({ status: "publicado", active: true, featured: true }).sort({
    createdAt: -1
  });
  res.json({ success: true, data: projects });
});

export const getProjectBySlug = asyncHandler(async (req, res) => {
  const project = await Project.findOne({ slug: req.params.slug });
  if (!project) throw new AppError("Projeto não encontrado", 404);
  res.json({ success: true, data: project });
});

export const createProject = asyncHandler(async (req, res) => {
  const project = await Project.create(projectPayload(req.body));
  res.status(201).json({ success: true, data: project });
});

export const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, projectPayload(req.body), {
    new: true,
    runValidators: true
  });
  if (!project) throw new AppError("Projeto não encontrado", 404);
  res.json({ success: true, data: project });
});

export const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) throw new AppError("Projeto não encontrado", 404);
  res.json({ success: true, message: "Projeto excluído" });
});
