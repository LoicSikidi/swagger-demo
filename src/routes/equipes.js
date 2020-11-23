const router = require('express').Router()

router.get('/', async (_, res) => {
    res.send({msg: "hello world"})
})

module.exports = router