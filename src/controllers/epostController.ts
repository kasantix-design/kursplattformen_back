import { Request, Response } from "express";
import { sendEpost } from "../services/epostService";

export const kontaktAdmin = async (req: Request, res: Response) => {
  const { navn, epost, melding } = req.body;

  try {
    await sendEpost({ navn, epost, melding });
    res.status(200).json({ message: "E-post sendt!" });
  } catch (err) {
    console.error("Feil ved sending av e-post:", err);
    res.status(500).json({ message: "Feil ved sending av e-post." });
  }
};
