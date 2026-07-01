import cors from "cors";
import { env } from "../config/env"; // Import your newly updated env variables

/**
 * CORS configuration.
 * Strictly accepts requests ONLY from the configured FRONTEND_URL.
 */
export const corsMiddleware = cors({
  origin: env.FRONTEND_URL, // Automatically uses Vercel in prod, and localhost locally!
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  maxAge: 86400, // 24 hours preflight cache
});