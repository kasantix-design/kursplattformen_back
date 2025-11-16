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
declare module 'express' {
  interface Request {
    user?: {
      id: string
      email?: string
      rolle?: string
    }
  }
}
