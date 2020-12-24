const knex = require('../connection/knex_connection')

// this end-point for update the data by id
module.exports = (Router) => {
    Router.put('/update/:id', (req, res) => {
        knex('training_and_placementCoordinator')
        .where('id', req.params.id)
        .update({
            Name: req.body.Name,
            Agenda: req.body.Agenda,
            Mentor: req.body.Mentor,
            Topic: req.body.Topic,
            PairLearning: req.body.PairLearning,
            Discussion: req.body.Discussion,
            EnglishProblem: req.body.EnglishProblem
        })
        .then((result) => {
            console.log(result)
            res.send('updated...')
        })
        .catch((err) => {
            console.log(err);
            res.send(err)
        })
    })
}

