const express   = require('express')
const swaggerUI = require('swagger-ui-express')
const yamljs    = require('yamljs')
const path      = require('path')
const PORT      = 3005
const app       = express()

const apiSpecPath = path.join(__dirname, 'openapi.yaml')

app.disable('x-powered-by')

app.get('*', swaggerUI.serve, swaggerUI.setup(yamljs.load(apiSpecPath)))

console.log(`The server listen on port: ${PORT}`)
const server = app.listen(PORT)

module.exports = server