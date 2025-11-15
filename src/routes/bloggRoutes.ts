import { Router } from "express"
import { hentAlleBlogg, opprettBlogg } from "../controllers/bloggController"
import { beskytte, admin } from "../middleware/auth"

const router = Router()

router.get("/", hentAlleBlogg)
router.post("/", beskytte, admin, opprettBlogg)

export default router
