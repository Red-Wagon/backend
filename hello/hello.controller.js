import Debug from 'debug'
import { HelloWorldService } from './hello.service.js'

const debug = Debug('helloWorld')

function helloWorld (req, res) {
  const { name } = req.query
  const message = HelloWorldService.generateMessage(name)

  debug(message)
  res.json({ message })
}

export default {
  helloWorld
}
