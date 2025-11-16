import express from "express";
import { hentAlleBlogg, opprettBlogg } from "../controllers/bloggController";

const router = express.Router();

router.get("/", hentAlleBlogg);
router.post("/", opprettBlogg);

export default router;
