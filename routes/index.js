import express from 'express'
import HelloRouter from '../hello/routes/index.js'

const router = express.Router()

router.use('/', HelloRouter)

export default router