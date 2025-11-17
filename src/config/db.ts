import mongoose from 'mongoose'
import { env } from './env'

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(env.MONGODB_URI)
    console.log(`✅ MongoDB tilkoblet: ${conn.connection.host}`)
  } catch (error) {
    console.error('❌ Feil ved tilkobling til MongoDB:', error)
    throw error
  }
}

