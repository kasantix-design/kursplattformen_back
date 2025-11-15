import mongoose from "mongoose"
import { env } from "./env"

export async function connectDB() {
  try {
    await mongoose.connect(env.MONGODB_URI)
    console.log("✅ MongoDB koblet til")
  } catch (err) {
    console.error("❌ Feil ved MongoDB-tilkobling:", err)
    process.exit(1)
  }
}
