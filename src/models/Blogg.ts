import mongoose from "mongoose"

const bloggSchema = new mongoose.Schema({
  tittel: { type: String, required: true },
  innhold: { type: String },
  forfatter: { type: mongoose.Schema.Types.ObjectId, ref: "Bruker" },
  opprettet: { type: Date, default: Date.now },
})

export const Blogg = mongoose.model("Blogg", bloggSchema)
