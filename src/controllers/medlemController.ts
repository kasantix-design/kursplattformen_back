import { Request, Response } from "express";
import { Medlem } from "../models/Medlem";

// Hent innlogget medlemsprofil
export const hentProfil = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Ikke autentisert" });
  }

  try {
    const medlem = await Medlem.findById(req.user.id).select("-passord"); // Fjern passord fra respons
    if (!medlem) {
      return res.status(404).json({ message: "Medlem ikke funnet" });
    }
    res.status(200).json(medlem);
  } catch (error) {
    res.status(500).json({ message: "Serverfeil" });
  }
};

// Oppdater medlemsprofil
export const oppdaterProfil = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Ikke autentisert" });
  }

  try {
    const oppdatertMedlem = await Medlem.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
      runValidators: true,
    }).select("-passord");

    res.status(200).json(oppdatertMedlem);
  } catch (error) {
    res.status(500).json({ message: "Kunne ikke oppdatere profil" });
  }
};

// Slett medlemskonto
export const slettProfil = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Ikke autentisert" });
  }

  try {
    await Medlem.findByIdAndDelete(req.user.id);
    res.status(200).json({ message: "Konto slettet" });
  } catch (error) {
    res.status(500).json({ message: "Kunne ikke slette konto" });
  }
};

