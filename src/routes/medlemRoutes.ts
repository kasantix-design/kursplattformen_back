import express from "express";
import {
  hentProfil,
  oppdaterProfil,
  slettProfil,
} from "../controllers/medlemController";
import { autentiser } from "../middleware/auth";

const router = express.Router();

// Alle ruter krever innlogging via middleware
router.get("/profil", autentiser, hentProfil);
router.put("/profil", autentiser, oppdaterProfil);
router.delete("/profil", autentiser, slettProfil);

export default router;
