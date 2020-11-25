const router = require('express').Router()
const faker = require('faker')
faker.locale = "fr"

router.get('/', async (req, res, next) => {
    try {
        res.send([])
    } catch (err) {
        next(err)
    }
})

/**
 * Fonction utilitaire
 */
const uneChanceSurDeux = () => Math.random() <= 0.5

module.exports = router