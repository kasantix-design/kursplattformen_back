import nodemailer from "nodemailer"
import { env } from "../config/env"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.GMAIL_USER,
    pass: env.GMAIL_PASS,
  },
})

export async function sendEpost({ navn, epost, melding }: { navn: string, epost: string, melding: string }) {
  return transporter.sendMail({
    from: `"${navn}" <${epost}>`,
    to: env.GMAIL_USER,
    subject: `Kontakt fra ${navn}`,
    text: melding,
  })
}
