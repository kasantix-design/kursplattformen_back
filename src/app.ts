import express from "express"
import cors from "cors"
import morgan from "morgan"

// Middleware
import { errorHandler } from "./middleware/errorHandler"

// Ruter
import kursRoutes from "./routes/kursRoutes"
import medlemRoutes from "./routes/medlemRoutes"
import bloggRoutes from "./routes/bloggRoutes"
import epostRoutes from "./routes/epostRoutes"
import videoRoutes from "./routes/videoRoutes"
import authRoutes from "./routes/authRoutes"
import profilRoutes from "./routes/profilRoutes"
import stripeRoutes from "./routes/stripeRoutes" // ✅ Ny Stripe-rute

const app = express()

// Middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// Rute-mounts
app.use("/api/kurs", kursRoutes)
app.use("/api/medlem", medlemRoutes)
app.use("/api/blogg", bloggRoutes)
app.use("/api/epost", epostRoutes)
app.use("/api/video", videoRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/profil", profilRoutes)
app.use("/api/betaling", stripeRoutes) // ✅ Legg til Stripe her

// Felles feilhåndtering
app.use(errorHandler)

export default app
