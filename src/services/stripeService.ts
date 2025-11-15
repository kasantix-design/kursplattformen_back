import Stripe from "stripe"
import { env } from "../config/env"

const stripe = new Stripe(env.STRIPE_KEY, { apiVersion: "2022-11-15" })

export async function opprettBetalingSession(kursId: string, amount: number) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{
      price_data: {
        currency: "nok",
        unit_amount: amount,
        product_data: {
          name: `Kurs: ${kursId}`
        },
      },
      quantity: 1,
    }],
    mode: "payment",
    success_url: `${env.FRONTEND_URL}/mine-kurs`,
    cancel_url: `${env.FRONTEND_URL}/kurs`,
  })
  return session.url
}
