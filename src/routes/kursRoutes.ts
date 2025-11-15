import { Router } from "express"
import {
  hentAlleKurs,
  hentKurs,
  opprettKurs,
} from "../controllers/kursController"
import { beskytte, admin } from "../middleware/auth"

const router = Router()

router.get("/", beskytte, hentAlleKurs)
router.get("/:id", beskytte, hentKurs)
router.post("/", beskytte, admin, opprettKurs)

export default router
