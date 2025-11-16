import express from 'express'
import { autentiser } from '../middleware/auth'

const router = express.Router()

router.get('/', autentiser, (req, res) => {
  res.json({
    id: req.user?.id,
    email: req.user?.email,
    rolle: req.user?.rolle
  })
})

export default router