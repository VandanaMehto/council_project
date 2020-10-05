var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'navgurukul',
        database: 'councilMember'
    }
});

module.exports = knex;

knex.schema.hasTable('training_and_placementCoordinator').then((exists) => {
    if(!exists){
        return knex.schema.createTable('training_and_placementCoordinator', (table) => {
            table.increments('Id'),
            table.string('Name'),
            table.string('Agenda'),
            table.string('Mentor'),
            table.string('Topic'),
            table.string('PairLearning'),
            table.string('Discussion'),
            table.string('EnglishProblem')
        })
        .catch((err) => {
            console.log(err, 'There is some err while writing the query')
        })
    }
    return console.log('Table is created.....');
})