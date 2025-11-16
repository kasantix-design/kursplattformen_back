import nodemailer from "nodemailer";
import { env } from "../config/env";

export const sendEpost = async (to: string, subject: string, text: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env.GMAIL_USER,
      pass: env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: env.GMAIL_USER,
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};
