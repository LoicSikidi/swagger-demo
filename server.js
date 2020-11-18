const express   = require('express')
const swaggerUI = require('swagger-ui-express')
const yamljs    = require('yamljs')
const path      = require('path')
const PORT      = 3005
const app       = express()

const apiSpecPath = path.join(__dirname, 'openapi.yaml')
const exo1 = path.join(__dirname, 'soluce_exo1.yaml')
const exo2 = path.join(__dirname, 'soluce_exo2.yaml')

app.disable('x-powered-by')
app.use("/default", swaggerUI.serve, (...args) => swaggerUI.setup(yamljs.load(apiSpecPath))(...args))
app.use("/solution-exo-1", swaggerUI.serve, (...args) => swaggerUI.setup(yamljs.load(exo1))(...args))
app.use("/solution-exo-2", swaggerUI.serve, (...args) => swaggerUI.setup(yamljs.load(exo2))(...args))


console.log(`The server listen on port: ${PORT}`)
const server = app.listen(PORT)

module.exports = server