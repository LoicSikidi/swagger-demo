const express    = require('express')
const bodyParser = require('body-parser');
const equipes    = require('./src/routes/equipes')
const swaggerUI  = require('swagger-ui-express')
const yamljs     = require('yamljs')
const path       = require('path')
const app        = express()
const PORT       = 3005

/**
 * Pages de documentation
 */
const getDocumentationPath = (filename) => path.join(__dirname, 'docs', `${filename}.yaml`)

app.use(bodyParser.json())
app.disable('x-powered-by')
app.use("/default", swaggerUI.serve, (...args) => swaggerUI.setup(yamljs.load(getDocumentationPath("default")))(...args))
app.use("/solution-exo-1", swaggerUI.serve, (...args) => swaggerUI.setup(yamljs.load(getDocumentationPath("soluce_exo1")))(...args))
app.use("/solution-exo-2", swaggerUI.serve, (...args) => swaggerUI.setup(yamljs.load(getDocumentationPath("soluce_exo2")))(...args))

/**
 * Validation du contrat côté serveur
 */
// const OpenApiValidator = require('express-openapi-validator')
// app.use(
//     OpenApiValidator.middleware({
//       apiSpec: './si-livedemo-api.yaml',
//       validateResponses: true,
//     }),
// )

app.use('/api/v1/equipes', equipes)

/**
 * ERROR HANDLERS
 */

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors,
    })
})

console.log(`The server listen on port: ${PORT}`)
const server = app.listen(PORT)

module.exports = server