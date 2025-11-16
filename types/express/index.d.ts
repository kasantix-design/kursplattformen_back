declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    PORT: string;
    MONGODB_URI: string;
    JWT_SECRET: string;
    FRONTEND_URL: string;
    STRIPE_KEY: string;
    OUTLOOK_EMAIL: string;
    OUTLOOK_PASS: string;
    GMAIL_USER: string;        // 
    GMAIL_PASS: string;        // 
  }
}
