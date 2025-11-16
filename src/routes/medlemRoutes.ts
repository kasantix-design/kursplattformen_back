import express from "express";
import { hentProfil } from "../controllers/medlemController";

const router = express.Router();

router.get("/profil", hentProfil);

export default router;
