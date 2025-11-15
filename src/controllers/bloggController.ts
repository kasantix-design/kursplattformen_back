import { Request, Response } from "express";
import Blogg from "../models/Blogg";

// Hent alle innlegg
export const hentAlleInnlegg = async (req: Request, res: Response) => {
  try {
    const innlegg = await Blogg.find().populate("forfatter", "navn");
    res.status(200).json(innlegg);
  } catch (err) {
    res.status(500).json({ message: "Feil ved henting av innlegg" });
  }
};

// Opprett nytt innlegg
export const hentMinSide = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Ikke autentisert" });
  }
export const opprettInnlegg = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Ikke autentisert bruker" });
  }

  const { tittel, innhold } = req.body;

  try {
    const nyttInnlegg = new Blogg({
      tittel,
      innhold,
      forfatter: req.user.id,
    });

    await nyttInnlegg.save();
    res.status(201).json(nyttInnlegg);
  } catch (err) {
    res.status(500).json({ message: "Kunne ikke opprette innlegg" });
  }
};

// Slett et innlegg
export const slettInnlegg = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const slettet = await Blogg.findByIdAndDelete(id);
    if (!slettet) {
      return res.status(404).json({ message: "Innlegg ikke funnet" });
    }
    res.status(200).json({ message: "Innlegg slettet" });
  } catch (err) {
    res.status(500).json({ message: "Feil ved sletting" });
  }
};
  }

