import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { env } from "../config/env"
import { Bruker } from "../models/Bruker"

interface JwtPayload {
  id: string
  rolle: string
}

export const beskytte = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader?.startsWith("Bearer "))
    return res.status(401).json({ msg: "Ingen token" })

  const token = authHeader.split(" ")[1]
  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload
    const bruker = await Bruker.findById(decoded.id).select("-passord")
    if (!bruker) return res.status(401).json({ msg: "Ugyldig bruker" })

    req.user = { id: bruker._id.tostring, rolle: bruker.rolle }
    next()
  } catch (err) {
    res.status(401).json({ msg: "Ugyldig token" })
  }
}

export const admin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.rolle !== "admin")
    return res.status(403).json({ msg: "Kun admin har tilgang" })
  next()
}
