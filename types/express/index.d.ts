import 'express'

declare module 'express' {
  interface UserPayload {
    id: string
    email?: string
    rolle?: 'medlem' | 'admin'
  }

  interface Request {
    user?: UserPayload
  }
}
