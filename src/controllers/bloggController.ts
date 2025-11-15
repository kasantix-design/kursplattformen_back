import { Request, Response } from "express"
import { Blogg } from "../models/Blogg"

export const hentAlleBlogg = async (_: Request, res: Response) => {
  const innlegg = await Blogg.find().sort({ opprettet: -1 })
  res.json(innlegg)
}

export const opprettBlogg = async (req: Request, res: Response) => {
  const nytt = await Blogg.create({ ...req.body, forfatter: req.user.id })
  res.status(201).json(nytt)
}
