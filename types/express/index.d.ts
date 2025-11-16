import { ObjectId } from 'mongoose'

declare module 'express' {
  interface UserPayload {
    id: string | ObjectId
    email?: string
    rolle: 'medlem' | 'admin'
  }

  interface Request {
    user?: UserPayload
  }
}
