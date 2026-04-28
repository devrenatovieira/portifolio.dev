import { Service } from "../models/Service.js";
import { AppError, asyncHandler } from "../utils/errors.js";

export const listServices = asyncHandler(async (req, res) => {
  const filter = req.user ? {} : { active: true };
  const services = await Service.find(filter).sort({ order: 1, createdAt: 1 });
  res.json({ success: true, data: services });
});

export const createService = asyncHandler(async (req, res) => {
  const service = await Service.create(req.body);
  res.status(201).json({ success: true, data: service });
});

export const updateService = asyncHandler(async (req, res) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!service) throw new AppError("Serviço não encontrado", 404);
  res.json({ success: true, data: service });
});

export const deleteService = asyncHandler(async (req, res) => {
  const service = await Service.findByIdAndDelete(req.params.id);
  if (!service) throw new AppError("Serviço não encontrado", 404);
  res.json({ success: true, message: "Serviço excluído" });
});
