export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT) || 4000,
  MONGODB_URI: process.env.MONGODB_URI!,
  JWT_SECRET: process.env.JWT_SECRET!,
  FRONTEND_URL: process.env.FRONTEND_URL!,
  STRIPE_KEY: process.env.STRIPE_KEY!,
  GMAIL_USER: process.env.GMAIL_USER!,
  GMAIL_PASS: process.env.GMAIL_PASS!,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || "kasantix@gmail.com",
};
