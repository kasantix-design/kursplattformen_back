import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { env } from '../config/env'

interface JwtPayload {
  id: string
  email?: string
  rolle?: string // kommer fra token
}

// Rolle-type du godtar
type TillattRolle = 'admin' | 'medlem'

// Type guard for å validere rollen
const erGyldigRolle = (rolle: any): rolle is TillattRolle => {
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

    const { id, email, rolle } = decoded

    if (!id || !erGyldigRolle(rolle)) {
      return res.status(403).json({ message: 'Ugyldig token-data' })
    }

    // Nå er rolle godkjent som 'admin' | 'medlem'
    req.user = { id, email, rolle }

    next()
  } catch {
    return res.status(401).json({ message: 'Token verifisering feilet' })
  }
}
