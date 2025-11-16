import { connectDB } from './config/db'
import { env } from './config/env'
import app from './app'

const PORT = env.PORT || 4000

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server kjører på http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error('❌ Klarte ikke å koble til databasen:', err)
    process.exit(1)
  })
