import express from "express"
import cors from "cors"
import morgan from "morgan"
import authRoutes from "./routes/authRoutes"
import kursRoutes from "./routes/kursRoutes"
import medlemRoutes from "./routes/medlemRoutes"
import bloggRoutes from "./routes/bloggRoutes"
import videoRoutes from "./routes/videoRoutes"
import epostRoutes from "./routes/epostRoutes"
import { errorHandler } from "./middleware/errorHandler"
import { logger } from "./middleware/logger"
import { env } from "./config/env"

const app = express()

app.use(cors({ origin: env.FRONTEND_URL }))
app.use(express.json())
app.use(logger)
app.use(morgan("dev"))

// API-endepunkter
app.use("/api/auth", authRoutes)
app.use("/api/kurs", kursRoutes)
app.use("/api/medlem", medlemRoutes)
app.use("/api/blogg", bloggRoutes)
app.use("/api/video", videoRoutes)
app.use("/api/epost", epostRoutes)

// Feilhåndtering
app.use(errorHandler)

export default app
