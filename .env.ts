PORT=4000
MONGODB_URI=test
JWT_SECRET=Lamaskenfalle
FRONTEND_URL=https://kursplattformen.netlify.app
STRIPE_KEY=test
GMAIL_USER=kasantix@gmail.com
GMAIL_PASS=cgzf pllp bsgr ionm
export const env = {
  NODE_ENV: process.env.NODE_ENV!,
  PORT: Number(process.env.PORT),
  MONGODB_URI: process.env.MONGODB_URI!,
  JWT_SECRET: process.env.JWT_SECRET!,
  FRONTEND_URL: process.env.FRONTEND_URL!,
  STRIPE_KEY: process.env.STRIPE_KEY!,
  OUTLOOK_EMAIL: process.env.OUTLOOK_EMAIL!,
  OUTLOOK_PASS: process.env.OUTLOOK_PASS!,
  GMAIL_USER: process.env.GMAIL_USER!,
  GMAIL_PASS: process.env.GMAIL_PASS!,
};

