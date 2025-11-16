import mongoose, { Schema, Document } from "mongoose";

export interface IMedlem extends Document {
  navn: string;
  epost: string;
  passord: string;
  rolle: "admin" | "medlem";
}

const MedlemSchema: Schema = new Schema(
  {
    navn: { type: String, required: true },
    epost: { type: String, required: true, unique: true },
    passord: { type: String, required: true },
    rolle: { type: String, enum: ["admin", "medlem"], default: "medlem" },
  },
  { timestamps: true }
);

export const Medlem = mongoose.model<IMedlem>("Medlem", MedlemSchema);
