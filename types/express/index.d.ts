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
}

export {};
