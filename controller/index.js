import Debug from 'debug'
import service from '../service/index.js'

const debug = Debug('helloWorld')

function helloWorld (req, res) {
  const { name } = req.query
  const message = service.generateHelloWorld(name)

  debug(message)
  res.json({ message })
}

export default {
  helloWorld
}
