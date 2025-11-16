import { Request, Response } from "express";
import { Bruker } from "../models/Bruker";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  const { navn, epost, passord, rolle } = req.body;

  try {
    const eksisterer = await Bruker.findOne({ epost });
    if (eksisterer) {
      return res.status(400).json({ message: "E-post allerede i bruk" });
    }

    const hashed = await bcrypt.hash(passord, 10);

    const nyBruker = new Bruker({
      navn,
      epost,
      passord: hashed,
      rolle: rolle || "medlem",
    });

    await nyBruker.save();

    res.status(201).json({ message: "Bruker registrert" });
  } catch (err) {
    res.status(500).json({ message: "Feil ved registrering" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { epost, passord } = req.body;

  try {
    const bruker = await Bruker.findOne({ epost });
    if (!bruker) {
      return res.status(401).json({ message: "Ugyldig e-post eller passord" });
    }

    const match = await bcrypt.compare(passord, bruker.passord);
    if (!match) {
      return res.status(401).json({ message: "Ugyldig e-post eller passord" });
    }

    const token = jwt.sign(
      { id: bruker._id.toString(), rolle: bruker.rolle },
      process.env.JWT_SECRET!,
      { expiresIn: "2h" }
    );

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Feil ved innlogging" });
  }
};
