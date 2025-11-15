import { errorHandler } from "./middleware/errorHandler"

app.use("/api/kurs", kursRoutes)
app.use(errorHandler)
