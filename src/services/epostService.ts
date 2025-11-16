import nodemailer from "nodemailer";
import { env } from "../config/env";

export const sendEpost = async (til: string, emne: string, melding: string) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env.GMAIL_USER,
      pass: env.GMAIL_PASS,
    },
  });

  await transport.sendMail({
    from: `"Kursplattformen" <${env.GMAIL_USER}>`,
    to: til,
    subject: emne,
    text: melding,
  });
};
