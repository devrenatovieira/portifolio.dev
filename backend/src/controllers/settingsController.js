import { ContactMessage } from "../models/ContactMessage.js";
import { Project } from "../models/Project.js";
import { Service } from "../models/Service.js";
import { Settings } from "../models/Settings.js";
import { asyncHandler } from "../utils/errors.js";

async function getSettingsDoc() {
  let settings = await Settings.findOne();
  if (!settings) settings = await Settings.create({});
  return settings;
}

export const getSettings = asyncHandler(async (req, res) => {
  const settings = await getSettingsDoc();
  res.json({ success: true, data: settings });
});

export const updateSettings = asyncHandler(async (req, res) => {
  const settings = await getSettingsDoc();
  Object.assign(settings, req.body);
  await settings.save();
  res.json({ success: true, data: settings });
});

export const dashboard = asyncHandler(async (req, res) => {
  const [projects, messages, services, latestContacts] = await Promise.all([
    Project.countDocuments(),
    ContactMessage.countDocuments(),
    Service.countDocuments(),
    ContactMessage.find().sort({ createdAt: -1 }).limit(5)
  ]);

  res.json({
    success: true,
    data: { projects, messages, services, latestContacts }
  });
});
