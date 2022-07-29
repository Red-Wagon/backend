import express from 'express'
import * as controller from '../controller/index.js'

const router = express.Router()

router.get('/hello', controller.helloWorld)

export default router
