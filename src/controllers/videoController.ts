import { Request, Response } from "express"
import { Video } from "../models/Video"

export const lagreVideo = async (req: Request, res: Response) => {
  const { tittel, url, kursId } = req.body
  const ny = await Video.create({ tittel, url, kurs: kursId })
  res.status(201).json(ny)
}

export const hentVideoer = async (req: Request, res: Response) => {
  const videoer = await Video.find({ kurs: req.params.kursId })
  res.json(videoer)
}
