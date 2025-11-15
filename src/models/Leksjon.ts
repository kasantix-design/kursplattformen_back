import mongoose from "mongoose"

const leksjonSchema = new mongoose.Schema({
  tittel: { type: String, required: true },
  innhold: String,
  videoUrl: String,
})

export const Leksjon = mongoose.model("Leksjon", leksjonSchema)
