import { Router } from "express"
import { kontaktAdmin } from "../controllers/epostController"

const router = Router()

router.post("/kontakt", kontaktAdmin)

export default router
