import { Request, Response } from "express";
import Kurs from "../models/Kurs";

// Hent alle kurs (offentlig)
export const hentMinSide = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Ikke autentisert" });
  }
export const hentAlleKurs = async (req: Request, res: Response) => {
  try {
    const kurs = await Kurs.find();
    res.status(200).json(kurs);
  } catch (err) {
    res.status(500).json({ message: "Feil ved henting av kurs" });
  }
};

// Opprett nytt kurs (kun admin)
export const opprettKurs = async (req: Request, res: Response) => {
  if (!req.user || req.user.rolle !== "admin") {
    return res.status(403).json({ message: "Kun admin kan opprette kurs" });
  }

  const { tittel, beskrivelse, dato, pris } = req.body;

  try {
    const nyttKurs = new Kurs({ tittel, beskrivelse, dato, pris });
    await nyttKurs.save();
    res.status(201).json(nyttKurs);
  } catch (err) {
    res.status(500).json({ message: "Kunne ikke opprette kurs" });
  }
};

// Påmeld medlem til kurs
export const meldPaKurs = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Ikke autorisert" });
  }

  const kursId = req.params.id;

  try {
    const kurs = await Kurs.findById(kursId);
    if (!kurs) return res.status(404).json({ message: "Kurs ikke funnet" });

    if (!kurs.deltakere.includes(req.user.id)) {
      kurs.deltakere.push(req.user.id);
      await kurs.save();
    }

    res.status(200).json({ message: "Påmeldt til kurs", kurs });
  } catch (err) {
    res.status(500).json({ message: "Feil ved påmelding" });
  }
};
