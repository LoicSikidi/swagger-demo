const express   = require('express')
const swaggerUI = require('swagger-ui-express')
const yamljs    = require('yamljs')
const PORT      = 3005
const app       = express()

app.disable('x-powered-by')

app.get('*', swaggerUI.serve, swaggerUI.setup(yamljs.load('openapi.yml')))

console.log(`The server listen on port: ${PORT}`)
const server = app.listen(PORT)

module.exports = server