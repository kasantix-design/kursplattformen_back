import { Request, Response } from "express"
import { Kurs } from "../models/Kurs"

export const hentAlleKurs = async (_: Request, res: Response) => {
  const kurs = await Kurs.find()
  res.json(kurs)
}

export const hentKurs = async (req: Request, res: Response) => {
  const kurs = await Kurs.findById(req.params.id).populate("leksjoner")
  if (!kurs) return res.status(404).json({ msg: "Kurs ikke funnet" })
  res.json(kurs)
}

export const opprettKurs = async (req: Request, res: Response) => {
  const nytt = await Kurs.create(req.body)
  res.status(201).json(nytt)
}
