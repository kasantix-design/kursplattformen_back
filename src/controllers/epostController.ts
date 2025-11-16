import { Request, Response } from "express";
import { sendEpost } from "../services/epostService";

export const kontaktAdmin = async (req: Request, res: Response) => {
  const { navn, epost, melding } = req.body;

  try {
    const mottaker = process.env.ADMIN_EMAIL || "kasantix@gmail.com"; // Bruk miljøvariabel eller fallback
    await sendEpost(mottaker, `Kontakt fra ${navn}`, `${melding}\n\nSvar til: ${epost}`);
    res.status(200).json({ message: "E-post sendt til admin." });
  } catch (err) {
    res.status(500).json({ message: "Kunne ikke sende e-post." });
  }
};
