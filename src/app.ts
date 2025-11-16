import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import kursRoutes from './routes/kursRoutes'
import medlemRoutes from './routes/medlemRoutes'
import bloggRoutes from './routes/bloggRoutes'
import epostRoutes from './routes/epostRoutes'
import videoRoutes from './routes/videoRoutes'
import authRoutes from './routes/authRoutes'
import profilRoutes from './routes/profilRoutes' // ← fra tidligere steg

import errorHandler from './middleware/errorHandler'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// Ruter
app.use('/api/kurs', kursRoutes)
app.use('/api/medlem', medlemRoutes)
app.use('/api/blogg', bloggRoutes)
app.use('/api/epost', epostRoutes)
app.use('/api/video', videoRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/profil', profilRoutes) // test for autentisering

// Felles feilhåndtering
app.use(errorHandler)

export default app
