const router = require('express').Router()
const faker = require('faker')
faker.locale = "fr"

const NB_EQUIPES = 5

router.get('/', async (req, res, next) => {
    try {
        const { pays } = req.query
        res.send({equipes: getEquipes(pays)})
    } catch (err) {
        next(err)
    }
})

const getEquipes = (pays) => {
    const allEquipes = fakeDataset()
    if(pays){
        return allEquipes.filter(equipe => equipe.pays == pays);
    }
    return allEquipes;
}
const fakeDataset = () => {
    equipes = []
    for (let index = 0; index < NB_EQUIPES; index++) {
        equipes.push({
            id   : faker.random.uuid(),
            nom  : faker.company.companyName(),
            sponsor: faker.company.companyName(),
            pays : uneChanceSurDeux() ? "France" : faker.address.country(),
        })
    }
    return equipes
}
/**
 * Fonction utilitaire
 */
const uneChanceSurDeux = () => Math.random() <= 0.5

module.exports = router