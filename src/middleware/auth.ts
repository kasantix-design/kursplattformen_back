import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { Medlem } from "../models/Medlem"

const JWT_SECRET = process.env.JWT_SECRET!

export const beskyttRoute = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Ingen token funnet" })
  }

  const token = authHeader.split(" ")[1]

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string }

    const medlem = await Medlem.findById(decoded.id)
    if (!medlem) {
      return res.status(401).json({ msg: "Ugyldig token" })
    }

    req.user = {
      id: medlem._id.toString(),
      rolle: medlem.rolle
    }

    next()
  } catch (err) {
    res.status(401).json({ msg: "Token-verifisering feilet" })
  }
}

export const kunAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user || req.user.rolle !== "admin") {
    return res.status(403).json({ msg: "Krever administrator-tilgang" })
  }
  next()
}
