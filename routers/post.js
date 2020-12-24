const knex = require('../connection/knex_connection')

// this end-point for post the data through postman to table
module.exports = (Router) => {
    Router.post('/post', (req, res) => {
        var varx = {
            Name: req.body.Name,
            Agenda: req.body.Agenda,
            Mentor: req.body.Mentor,
            Topic: req.body.Topic,
            PairLearning: req.body.PairLearning,
            Discussion: req.body.Discussion,
            EnglishProblem: req.body.EnglishProblem
        }

        knex('training_and_placementCoordinator').insert(varx)
        .then((result) => {
            console.log(result)
            res.send('data posted...')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
}