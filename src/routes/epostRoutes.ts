import express from "express";
import { kontaktAdmin } from "../controllers/epostController";

const router = express.Router();

router.post("/", kontaktAdmin);

export default router;
