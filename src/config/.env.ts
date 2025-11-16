import dotenv from 'dotenv'
dotenv.config()

export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: Number(process.env.PORT),
  MONGODB_URI: process.env.MONGODB_URI!,
  JWT_SECRET: process.env.JWT_SECRET!,
  FRONTEND_URL: process.env.FRONTEND_URL!,
  STRIPE_KEY: process.env.STRIPE_KEY!,
  GMAIL_USER: process.env.GMAIL_USER!,
  GMAIL_PASS: process.env.GMAIL_PASS!,
}
