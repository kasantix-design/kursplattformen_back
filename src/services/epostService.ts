import nodemailer from "nodemailer";
import { env } from "../config/env";

interface EpostData {
  navn: string;
  epost: string;
  melding: string;
}

export const sendEpost = async ({ navn, epost, melding }: EpostData) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env.GMAIL_USER,
      pass: env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${navn}" <${epost}>`,
    to: env.GMAIL_USER,
    subject: "Ny henvendelse fra medlem",
    text: melding,
  };

  await transporter.sendMail(mailOptions);
};
