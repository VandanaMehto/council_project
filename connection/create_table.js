const knex = require('./knex_connection')

knex.schema.hasTable('training_and_placementCoordinator').then((exists) => {
    if(!exists){
        return knex.schema.createTable('training_and_placementCoordinator', (table) => {
            table.increments('Id').primary()
            table.string('Name'),
            table.string('Agenda'),
            table.string('Mentor'),
            table.string('Topic'),
            table.string('PairLearning'),
            table.string('Discussion'),
            table.string('EnglishProblem')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return console.log('table has created...')

})