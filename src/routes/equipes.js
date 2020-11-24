const router = require('express').Router()

router.get('/', async (_, res) => {
    res.send({msg: "hello worlds"})
})

module.exports = router