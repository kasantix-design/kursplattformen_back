import { ObjectId } from "mongoose"

declare global {
  namespace Express {
    interface UserPayload {
      id: string | ObjectId
      rolle: "medlem" | "admin"
    }

    interface Request {
      user?: UserPayload
    }
  }
}

export {}
