import express from "express";
import { hentAlleKurs, hentKurs, opprettKurs } from "../controllers/kursController";

const router = express.Router();

router.get("/", hentAlleKurs);
router.get("/:id", hentKurs);
router.post("/", opprettKurs);

export default router;
