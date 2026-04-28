import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    email: { type: String, default: "dev.renatovieira@gmail.com" },
    whatsapp: { type: String, default: "+55 92 98491-0584" },
    secondaryWhatsapp: { type: String, default: "" },
    instagram: { type: String, default: "" },
    homeText: {
      type: String,
      default: "Desenvolvedor Frontend com foco em React, React Native e JavaScript, criando experiências orientadas ao usuário."
    },
    aboutText: {
      type: String,
      default: "Renato Vieira é desenvolvedor Frontend com experiência em projetos corporativos, integração a APIs, Firebase e interfaces responsivas."
    },
    logo: { type: String, default: "" }
  },
  { timestamps: true }
);

export const Settings = mongoose.model("Settings", settingsSchema);
