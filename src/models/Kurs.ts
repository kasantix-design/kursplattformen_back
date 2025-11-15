import mongoose from "mongoose"

const kursSchema = new mongoose.Schema({
  tittel: { type: String, required: true },
  beskrivelse: String,
  leksjoner: [{ type: mongoose.Schema.Types.ObjectId, ref: "Leksjon" }],
})

export const Kurs = mongoose.model("Kurs", kursSchema)
