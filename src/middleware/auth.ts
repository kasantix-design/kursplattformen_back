import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { ObjectId } from "mongoose"
import { Bruker } from "../models/Bruker"

interface TokenPayload {
  id: string
  rolle: string
}

export const autentiser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1]
  if (!token) {
    return res.status(401).json({ msg: "Ingen token, tilgang nektet" })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload
    const bruker = await Bruker.findById(decoded.id)

    if (!bruker) {
      return res.status(401).json({ msg: "Bruker ikke funnet" })
    }

    req.user = {
      id: bruker._id.toString(),
      rolle: bruker.rolle,
    }

    next()
  } catch (err) {
    res.status(401).json({ msg: "Ugyldig token" })
  }
}

export const sjekkRolle = (rolle: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || req.user.rolle !== rolle) {
      return res
        .status(403)
        .json({ msg: "Du har ikke tilgang til denne ressursen" })
    }
    next()
  }
}
