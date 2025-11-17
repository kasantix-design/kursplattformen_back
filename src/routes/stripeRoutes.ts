import express from "express"
import { opprettStripeCheckout } from "../services/stripeService"

const router = express.Router()

router.post("/stripe", async (req, res) => {
  try {
    const { kursId } = req.body
    if (!kursId) return res.status(400).json({ error: "Mangler kursId" })

    const session = await opprettStripeCheckout(kursId)
    res.json({ url: session.url })
  } catch (err) {
    console.error("Stripe-feil:", err)
    res.status(500).json({ error: "Feil ved Stripe-checkout" })
  }
})

export default router
