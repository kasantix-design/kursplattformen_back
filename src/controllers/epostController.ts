import { Request, Response } from "express";
import { sendEpost } from "../services/epostService"; 


// Kun admin skal kunne sende e-post
export const hentMinSide = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Ikke autentisert" });
  }
export const sendAdminEpost = async (req: Request, res: Response) => {
  if (!req.user || req.user.rolle !== "admin") {
    return res.status(403).json({ message: "Bare admin kan sende e-post" });
  }

  const { til, emne, melding } = req.body;

  try {
    await sendEpost(til, emne, melding);
    res.status(200).json({ message: "E-post sendt" });
  } catch (err) {
    res.status(500).json({ message: "Feil ved sending av e-post" });
  }
};
 } 
