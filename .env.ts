PORT=4000
MONGODB_URI=wxSylpXNWPqHXuTO
JWT_SECRET=Lamaskenfalle
FRONTEND_URL=https://kursplattformen.netlify.app
STRIPE_KEY=sk_test_51STACSK93dHJoD6xGHJnwqCIUkjhZdltqN8K74mbfGzAfL5ed8kLOSqKlQvtUXjqcUTQaLl4DKsX3tmnlcBDe7C200JkPNUHXd
GMAIL_USER=kasantix@gmail.com
GMAIL_PASS=cgzf pllp bsgr ionm
export const env = {
  NODE_ENV: process.env.NODE_ENV!,
  PORT: Number(process.env.PORT),
  MONGODB_URI: process.env.MONGODB_URI!,
  JWT_SECRET: process.env.JWT_SECRET!,
  FRONTEND_URL: process.env.FRONTEND_URL!,
  STRIPE_KEY: process.env.STRIPE_KEY!,
  GMAIL_USER: process.env.GMAIL_USER!,
  GMAIL_PASS: process.env.GMAIL_PASS!,
};

