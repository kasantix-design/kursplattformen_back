import { ObjectId } from "mongoose";

declare global {
  namespace Express {
    interface UserPayload {
      id: string | ObjectId;
      rolle: string;
    }

    interface Request {
      user?: UserPayload;
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT: string;
      MONGODB_URI: string;
      JWT_SECRET: string;
      FRONTEND_URL: string;
      STRIPE_KEY: string;
      OUTLOOK_EMAIL: string;
      OUTLOOK_PASS: string;
      GMAIL_USER: string;
      GMAIL_PASS: string;
    }
  }
}

export {};
