// src/models/Medlem.ts
import mongoose from "mongoose";

const medlemSchema = new mongoose.Schema({
  navn: String,
  epost: String,
  rolle: String,
});

const Medlem = mongoose.model("Medlem", medlemSchema);

export { Medlem };
