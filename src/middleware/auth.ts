import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { env } from '../config/env'

interface JwtPayload {
  id: string
  email?: string
  rolle?: string
}

// Sikker sjekk på rolle-verdien før vi bruker den
const erGyldigRolle = (rolle: any): rolle is 'admin' | 'medlem' => {
  return rolle === 'admin' || rolle === 'medlem'
}

export const autentiser = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Ingen eller ugyldig token' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload

    // Type-narrowing her
    if (!decoded.id || !erGyldigRolle(decoded.rolle)) {
      return res.status(403).json({ message: 'Ugyldig token-rolle eller ID' })
    }

    req.user = {
      id: decoded.id,
      email: decoded.email,
      rolle: decoded.rolle // nå godkjent som 'admin' | 'medlem'
    }

    next()
  } catch {
    return res.status(401).json({ message: 'Token verifisering feilet' })
  }
}
