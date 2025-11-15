import mongoose from "mongoose"

const videoSchema = new mongoose.Schema({
  tittel: String,
  url: { type: String, required: true },
  kurs: { type: mongoose.Schema.Types.ObjectId, ref: "Kurs" },
  lastetOpp: { type: Date, default: Date.now },
})

export const Video = mongoose.model("Video", videoSchema)
