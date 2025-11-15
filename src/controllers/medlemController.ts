import { Request, Response } from "express";
import Medlem from "../models/Medlem";

// Hent info om innlogget medlem
export const hentMinSide = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Ikke autentisert" });
  }
export const hentMinProfil = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Ikke autentisert" });
  }

  try {
    const medlem = await Medlem.findById(req.user.id).select("-passord");
    if (!medlem) {
      return res.status(404).json({ message: "Medlem ikke funnet" });
    }

    res.status(200).json(medlem);
  } catch (err) {
    res.status(500).json({ message: "Feil ved henting av medlemsprofil" });
  }
};

// Oppdater medlemsinfo
export const oppdaterProfil = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Ikke autorisert" });
  }

  try {
    const oppdatert = await Medlem.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
    }).select("-passord");

    res.status(200).json(oppdatert);
  } catch (err) {
    res.status(500).json({ message: "Kunne ikke oppdatere profil" });
  }
};

// Slett medlemskonto
export const slettKonto = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Ikke autorisert" });
  }

  try {
    await Medlem.findByIdAndDelete(req.user.id);
    res.status(200).json({ message: "Konto slettet" });
  } catch (err) {
    res.status(500).json({ message: "Feil ved sletting av konto" });
  }
}
