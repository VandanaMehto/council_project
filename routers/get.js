const knex = require("../connection/knex_connection");

// this end-point for to get the whole data
module.exports = (Router) => {
    Router.get('/get', (req, res) => {
        knex.select('*').from('training_and_placementCoordinator')
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })


    // this end-point for to get the data by id
    .get('/get/:id', (req, res) => {
        var id = req.params.id
        knex.select('*').from('training_and_placementCoordinator')
        .where('training_and_placementCoordinator.Id', id)
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })


    // this end-point for to get the length of name by id
    .get('/getName/:id', (req, res) => {
        var id = req.params.id
        knex.select('Name').from('training_and_placementCoordinator')
        .where('training_and_placementCoordinator.Id', id)
        .then((name) => {
            var name = name[0].Name
            console.log(name.length)
            res.send(name.length)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
}



