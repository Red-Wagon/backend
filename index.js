import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import bodyParser from 'body-parser'
import * as OpenApiValidator from 'express-openapi-validator'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import router from './routes/index.js'

const app = express()
const port = process.env.PORT || 3001
const swaggerDocument = YAML.load('./openapi.yaml')

app.set('etag', false)
app.use(bodyParser.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(
    OpenApiValidator.middleware({
      apiSpec: './openapi.yaml',
      validateRequests: true,
      validateResponses: true,
    }),
);

app.use('/', router)

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
