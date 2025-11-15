import { Request, Response } from "express"
import { sendEpost } from "../services/epostService"

export const kontaktAdmin = async (req: Request, res: Response) => {
  const { navn, epost, melding } = req.body
  await sendEpost({ navn, epost, melding })
  res.json({ msg: "Sendt!" })
}
