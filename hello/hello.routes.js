import express from 'express'
import controller from '../hello.controller.js'

const router = express.Router()

router.get('/hello', controller.helloWorld)

export default router
