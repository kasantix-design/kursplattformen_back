import app from './app'
import { connectDB } from './config/db'
import { env } from './config/env'

const startServer = async () => {
  try {
    await connectDB()

    const PORT = env.PORT || 4000
    app.listen(PORT, () => {
      console.log(`🚀 Server kjører på port ${PORT}`)
    })
  } catch (error) {
    console.error('❌ Klarte ikke å starte server:', error)
    process.exit(1)
  }
}

startServer()
