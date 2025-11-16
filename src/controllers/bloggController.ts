import { Request, Response } from "express";
import { Blogg } from "../models/Blogg";

export const hentAlleBlogg = async (req: Request, res: Response) => {
  try {
    const blogger = await Blogg.find();
    res.status(200).json(blogger);
  } catch (err) {
    res.status(500).json({ message: "Feil ved henting av blogginnlegg" });
  }
};

export const opprettBlogg = async (req: Request, res: Response) => {
  if (!req.user) return res.status(401).json({ message: "Ikke autentisert" });

  const { tittel, innhold } = req.body;

  try {
    const nyBlogg = new Blogg({
      tittel,
      innhold,
      forfatter: req.user.id,
    });

    await nyBlogg.save();
    res.status(201).json(nyBlogg);
  } catch (err) {
    res.status(500).json({ message: "Kunne ikke opprette blogginnlegg" });
  }
};
