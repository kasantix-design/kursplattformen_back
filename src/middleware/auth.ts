import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { env } from '../config/env'

interface JwtPayload {
  id: string
  email?: string
  rolle?: string
}

export const autentiser = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Ingen eller ugyldig token' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload
    // legg brukerinformasjon i request-objektet
    req.user = decoded
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Token verifisering feilet' })
  }
}
