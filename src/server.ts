import { connectDB } from "./config/db"
import { env } from "./config/env"
import app from "./app"

connectDB().then(() => {
  app.listen(env.PORT, () => {
    console.log(`🚀 Server kjører på http://localhost:${env.PORT}`)
  })
})
