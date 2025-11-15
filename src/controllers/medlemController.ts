import { Request, Response } from "express"
import { Bruker } from "../models/Bruker"

export const hentProfil = async (req: Request, res: Response) => {
  const bruker = await Bruker.findById(req.user.id).select("-passord")
  res.json(bruker)
}
