import { ObjectId } from 'mongoose'

declare global {
  namespace Express {
    interface UserPayload {
      id: string | ObjectId
      email?: string
      rolle: 'medlem' | 'admin'
    }

    interface Request {
      user?: UserPayload
    }
  }
}

export {}
