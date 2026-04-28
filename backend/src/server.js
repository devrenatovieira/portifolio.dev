import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import rateLimit from "express-rate-limit";
import fs from "fs";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import { authRoutes } from "./routes/authRoutes.js";
import { contactRoutes } from "./routes/contactRoutes.js";
import { projectRoutes } from "./routes/projectRoutes.js";
import { serviceRoutes } from "./routes/serviceRoutes.js";
import { settingsRoutes } from "./routes/settingsRoutes.js";
import { uploadRoutes } from "./routes/uploadRoutes.js";
import { errorHandler, notFound } from "./utils/errors.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.join(__dirname, "../uploads");
const allowedOrigins = process.env.FRONTEND_URL?.split(",").map((origin) => origin.trim()).filter(Boolean) || [];

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Origem não permitida pelo CORS"));
    },
    credentials: true
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 300 }));
app.use("/uploads", express.static(uploadsDir));

app.get("/", (req, res) => {
  res.json({ success: true, message: "API do portfolio Renato Vieira online" });
});

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/upload", uploadRoutes);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(port, () => console.log(`API rodando na porta ${port}`));
  })
  .catch((error) => {
    console.error("Falha ao conectar no banco", error.message);
    process.exit(1);
  });
