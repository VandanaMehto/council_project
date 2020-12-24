const express = require('express')
const app = express();
const knex = require('./connection/create_table')
const router = express.Router();
const bodyParser = require('body-parser')

app.use(express.json())
app.use('/', router);

require('./routers/get')(router);
require('./routers/post')(router);
require('./routers/update')(router);
require('./routers/delete')(router);

app.listen(8000, () => {
    console.log('server started on port 8000')
})