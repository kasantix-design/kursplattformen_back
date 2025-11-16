import { Request, Response } from "express";
import { Video } from "../models/Video";

export const lagreVideo = async (req: Request, res: Response) => {
  if (!req.user) return res.status(401).json({ message: "Ikke autentisert" });

  const { tittel, url } = req.body;

  try {
    const nyVideo = new Video({
      tittel,
      url,
      bruker: req.user.id,
    });

    await nyVideo.save();
    res.status(201).json(nyVideo);
  } catch (err) {
    res.status(500).json({ message: "Kunne ikke lagre video" });
  }
};

export const hentVideoer = async (req: Request, res: Response) => {
  if (!req.user) return res.status(401).json({ message: "Ikke autorisert" });

  try {
    const videoer = await Video.find({ bruker: req.user.id });
    res.status(200).json(videoer);
  } catch (err) {
    res.status(500).json({ message: "Feil ved henting av videoer" });
  }
};
