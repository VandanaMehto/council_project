var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var knex = require('./connect.js');
app.use(bodyParser());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'navgurukul',
    database: 'councilMember'
});

// connection
mysqlConnection.connect((err) => {
    if(err) throw err;
    console.log('Mysql connected....');
});

// this end-point to get tha whole data
app.get('/get', (req, res) => {
    knex.select('*').from('training_and_placementCoordinator')
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.send(err);
    })                    
});

// this end-point to get tha data by id 
app.get('/get/:id', (req, res) => {
    var id = req.params.id
    knex.select('*').from('training_and_placementCoordinator')
    .where('training_and_placementCoordinator.Id',id)
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.send(err);

    })
});

// this end-point to get length of tha name by id wise only.
app.get('/getName/:id', (req, res) => {
    var id = req.params.id
    // console.log(id);
    knex.select('Name').from('training_and_placementCoordinator')
    .where('training_and_placementCoordinator.Id',id)
  
    .then((name) => {
        var name  = (name[0].Name);
        console.log(name.length);
        res.json(name.length)
    })
    .catch((err) => {
        res.send(err);
    })
});

// this end-point for post the data by postman
app.post('/post', (req, res) => {
    var data = {
        Name: req.body.Name,
        Agenda: req.body.Agenda,
        Mentor: req.body.Mentor,
        Topic: req.body.Topic,
        PairLearning: req.body.PairLearning,
        Discussion: req.body.Discussion,
        EnglishProblem: req.body.EnglishProblem
    }
    knex('training_and_placementCoordinator').insert(data)
    .then((result) => {
        console.log('posted....');
        res.send('Posted....');
    })
    .catch((err) => {
        res.send(err);
    })
});

// this end-point for update the value of key bt id
app.put('/update/:id', (req, res) => {
    knex('training_and_placementCoordinator')
    .where('id' , req.params.id)
    .update({
        Name: req.body.Name,
        Agenda: req.body.Agenda,
        Mentor: req.body.Mentor,
        Topic: req.body.Topic,
        PairLearning: req.body.PairLearning,
        Discussion: req.body.Discussion,
        EnglishProblem: req.body.EnglishProblem

    })
    .then(() => {
        console.log('Updated....')
        res.send('Updated....');
    })
    .catch((err) => {
        res.send(err);
    })
});

// this end-point for delete tha data by id
app.delete('/delete/:id', (req, res) => {
    knex('training_and_placementCoordinator')
    .where('id', req.params.id)
    .delete()
    .then(() => {
        console.log('Deleted...')
        res.send('Deleted...')
    })
    .catch((err) => {
        res.send(err);
    })
});

app.listen(8000, () => {
    console.log('server started on port 8000');
});