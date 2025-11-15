import { Router } from "express"
import { hentProfil } from "../controllers/medlemController"
import { beskytte } from "../middleware/auth"

const router = Router()

router.get("/profil", beskytte, hentProfil)

export default router
