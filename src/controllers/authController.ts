import { Request, Response } from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { Medlem } from "../models/Medlem"

const JWT_SECRET = process.env.JWT_SECRET!

export const register = async (req: Request, res: Response) => {
  const { navn, epost, passord } = req.body

  try {
    const eksisterende = await Medlem.findOne({ epost })
    if (eksisterende) {
      return res.status(400).json({ msg: "E-post er allerede registrert" })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassord = await bcrypt.hash(passord, salt)

    const nyttMedlem = new Medlem({
      navn,
      epost,
      passord: hashedPassord,
      rolle: "medlem"
    })

    await nyttMedlem.save()

    const token = jwt.sign({ id: nyttMedlem._id, rolle: nyttMedlem.rolle }, JWT_SECRET, {
      expiresIn: "7d"
    })

    res.status(201).json({ token })
  } catch (err) {
    res.status(500).json({ msg: "Noe gikk galt ved registrering" })
  }
}

export const login = async (req: Request, res: Response) => {
  const { epost, passord } = req.body

  try {
    const medlem = await Medlem.findOne({ epost })
    if (!medlem) {
      return res.status(400).json({ msg: "Ugyldig e-post eller passord" })
    }

    const isMatch = await bcrypt.compare(passord, medlem.passord)
    if (!isMatch) {
      return res.status(400).json({ msg: "Ugyldig e-post eller passord" })
    }

    const token = jwt.sign({ id: medlem._id, rolle: medlem.rolle }, JWT_SECRET, {
      expiresIn: "7d"
    })

    res.status(200).json({ token })
  } catch (err) {
    res.status(500).json({ msg: "Innlogging feilet" })
  }
}
