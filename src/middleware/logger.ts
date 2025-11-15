import { Request, Response, NextFunction } from "express"

export const logger = (req: Request, _: Response, next: NextFunction) => {
  const tid = new Date().toISOString()
  console.log(`[${tid}] ${req.method} ${req.originalUrl}`)
  next()
}
