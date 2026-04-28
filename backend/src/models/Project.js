import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    category: {
      type: String,
      enum: ["Sites", "Sistemas", "Dashboards", "Apps", "APIs"],
      required: true
    },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    problem: { type: String, default: "" },
    solution: { type: String, default: "" },
    technologies: [{ type: String }],
    mainImage: { type: String, default: "" },
    gallery: [{ type: String }],
    projectUrl: { type: String, default: "" },
    repositoryUrl: { type: String, default: "" },
    status: { type: String, enum: ["publicado", "rascunho"], default: "rascunho" },
    featured: { type: Boolean, default: false },
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const Project = mongoose.model("Project", projectSchema);
