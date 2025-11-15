import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { Bruker } from "../models/Bruker"
import { env } from "../config/env"

export const register = async (req: Request, res: Response) => {
  const { navn, epost, passord, rolle } = req.body
  const eksisterer = await Bruker.findOne({ epost })
  if (eksisterer) return res.status(400).json({ msg: "Bruker finnes" })

  const hash = await bcrypt.hash(passord, 12)
  const ny = await Bruker.create({ navn, epost, passord: hash, rolle })
  res.status(201).json({ msg: "Registrert" })
}

export const login = async (req: Request, res: Response) => {
  const { epost, passord } = req.body
  const bruker = await Bruker.findOne({ epost })
  if (!bruker) return res.status(401).json({ msg: "Feil e-post eller passord" })

  const erRiktig = await bcrypt.compare(passord, bruker.passord)
  if (!erRiktig) return res.status(401).json({ msg: "Feil e-post eller passord" })

  const token = jwt.sign({ id: bruker._id, rolle: bruker.rolle }, env.JWT_SECRET, { expiresIn: "7d" })
  res.json({ token, rolle: bruker.rolle })
}
