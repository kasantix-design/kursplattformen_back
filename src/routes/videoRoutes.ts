import express from "express";
import { hentVideoer, lagreVideo } from "../controllers/videoController";

const router = express.Router();

router.get("/", hentVideoer);
router.post("/", lagreVideo);

export default router;
