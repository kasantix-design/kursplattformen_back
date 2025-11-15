import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Bruker from "../models/Bruker";

const JWT_SECRET = process.env.JWT_SECRET as string;

// Opprett JWT
const genererToken = (id: string, rolle: string) => {
  return jwt.sign({ id, rolle }, JWT_SECRET, { expiresIn: "7d" });
};

// POST /api/login
export const login = async (req: Request, res: Response) => {
  const { epost, passord } = req.body;

  try {
    const bruker = await Bruker.findOne({ epost });

    if (!bruker || !(await bcrypt.compare(passord, bruker.passord))) {
      return res.status(401).json({ message: "Ugyldig e-post eller passord" });
    }

    const token = genererToken(bruker._id.toString(), bruker.rolle);

    res.status(200).json({
      token,
      bruker: {
        id: bruker._id,
        navn: bruker.navn,
        epost: bruker.epost,
        rolle: bruker.rolle,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Innlogging feilet" });
  }
};

// GET /api/me
export const hentMeg = async (req: Request, res: Response) => {
  if (!req.user) return res.status(401).json({ message: "Ikke autentisert" });

  try {
    const bruker = await Bruker.findById(req.user.id).select("-passord");
    if (!bruker) return res.status(404).json({ message: "Bruker ikke funnet" });

    res.status(200).json(bruker);
  } catch (err) {
    res.status(500).json({ message: "Kunne ikke hente bruker" });
  }
};
