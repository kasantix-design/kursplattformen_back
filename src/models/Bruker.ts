import mongoose from "mongoose"

const brukerSchema = new mongoose.Schema({
  navn: { type: String, required: true },
  epost: { type: String, required: true, unique: true },
  passord: { type: String, required: true },
  rolle: { type: String, enum: ["admin", "medlem"], default: "medlem" },
})

export const Bruker = mongoose.model("Bruker", brukerSchema)
