const knex = require('../connection/knex_connection')

// this end-point for delete the data by id
module.exports = (Router) => {
    Router.delete('/delete/:id', (req, res) => {
        knex('training_and_placementCoordinator')
        .where('id', req.params.id)
        .delete()
        .then((result) => {
            console.log(result)
            res.send('deleted...')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
}
