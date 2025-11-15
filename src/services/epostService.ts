import nodemailer from "nodemailer"
import { env } from "../config/env"

const transporter = nodemailer.createTransport({
  service: "Outlook365",
  auth: {
    user: env.OUTLOOK_EMAIL,
    pass: env.OUTLOOK_PASS,
  },
})

export async function sendEpost({ navn, epost, melding }: { navn: string, epost: string, melding: string }) {
  return transporter.sendMail({
    from: epost,
    to: env.OUTLOOK_EMAIL,
    subject: `Kontakt fra ${navn}`,
    text: melding,
  })
}
