import { Request, Response } from "express";
import { Kurs } from "../models/Kurs";

export const hentAlleKurs = async (_req: Request, res: Response) => {
  try {
    const kurs = await Kurs.find();
    res.status(200).json(kurs);
  } catch (err) {
    res.status(500).json({ message: "Feil ved henting av kurs" });
  }
};

export const hentKurs = async (req: Request, res: Response) => {
  try {
    const kurs = await Kurs.findById(req.params.id);
    if (!kurs) return res.status(404).json({ message: "Kurs ikke funnet" });
    res.status(200).json(kurs);
  } catch (err) {
    res.status(500).json({ message: "Feil ved henting av kurset" });
  }
};

export const opprettKurs = async (req: Request, res: Response) => {
  if (!req.user) return res.status(401).json({ message: "Ikke autentisert" });

  const { tittel, beskrivelse } = req.body;

  try {
    const nyttKurs = new Kurs({
      tittel,
      beskrivelse,
      opprettetAv: req.user.id,
    });

    await nyttKurs.save();
    res.status(201).json(nyttKurs);
  } catch (err) {
    res.status(500).json({ message: "Feil ved opprettelse av kurs" });
  }
};
