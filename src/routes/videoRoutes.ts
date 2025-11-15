import { Router } from "express"
import { hentVideoer, lagreVideo } from "../controllers/videoController"
import { beskytte, admin } from "../middleware/auth"

const router = Router()

router.get("/:kursId", beskytte, hentVideoer)
router.post("/", beskytte, admin, lagreVideo)

export default router
