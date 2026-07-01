import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  MONGODB_URI: z.string().min(1, "MONGODB_URI is required"),
  JWT_SECRET: z.string().min(32, "JWT_SECRET must be at least 32 characters"),
  JWT_REFRESH_SECRET: z.string().min(32, "JWT_REFRESH_SECRET must be at least 32 characters"),
  GOOGLE_AI_API_KEY: z.string().min(1).optional(),
  GEMINI_API_KEY: z.string().min(1).optional(),
  GEMINI_MODEL: z.string().min(1).default("gemini-2.5-flash"),
  GEMINI_MODEL_ALLOWLIST: z.string().optional(),
  GEMINI_ALLOW_PRO_MODELS: z.enum(["true", "false"]).optional().default("false"),
  
  // 1. Added FRONTEND_URL to safely handle Vercel CORS connections
  FRONTEND_URL: z.string().default("http://localhost:3000"),
  
  // 2. Updated API_PORT to check for Render's injected PORT first
  API_PORT: z.coerce.number().int().positive().default(Number(process.env.PORT) || 4000),
  
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    "Invalid environment variables:",
    JSON.stringify(parsed.error.flatten().fieldErrors, null, 2)
  );
  process.exit(1);
}

export const env = parsed.data;