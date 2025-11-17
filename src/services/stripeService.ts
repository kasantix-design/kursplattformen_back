import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_KEY!, {
  apiVersion: "2022-11-15",
})

export default async function opprettStripeCheckout(kursId: string) {
  return await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "nok",
          product_data: { name: `Kurs ID: ${kursId}` },
          unit_amount: 49900, // 499 NOK
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.FRONTEND_URL}/betaling?status=success`,
    cancel_url: `${process.env.FRONTEND_URL}/betaling?status=cancel`,
  })
}
