import mongoose, { Document, Schema } from "mongoose"

export interface IMedlem extends Document {
  navn: string
  epost: string
  passord: string
  rolle: "medlem" | "admin"
}

const medlemSchema = new Schema<IMedlem>({
  navn: { type: String, required: true },
  epost: { type: String, required: true, unique: true },
  passord: { type: String, required: true },
  rolle: { type: String, enum: ["medlem", "admin"], default: "medlem" }
})

export const Medlem = mongoose.model<IMedlem>("Medlem", medlemSchema)
