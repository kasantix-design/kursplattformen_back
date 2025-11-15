
import dotenv from "dotenv"
dotenv.config()

function required(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback
  if (!value) throw new Error(`Missing required env variable: ${key}`)
  return value
}

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT) || 4000,
  MONGODB_URI: required("MONGODB_URI"),
  JWT_SECRET: required("JWT_SECRET"),
  FRONTEND_URL: required("FRONTEND_URL"),
  STRIPE_KEY: required("STRIPE_KEY"),
  OUTLOOK_EMAIL: required("OUTLOOK_EMAIL"),
  OUTLOOK_PASS: required("OUTLOOK_PASS"),
}
