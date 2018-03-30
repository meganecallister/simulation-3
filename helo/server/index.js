require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const hc = require('./helo_controller');

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env

const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING).then( db => {
    app.set('db', db);
})

app.post('/api/login', hc.login);
app.post('/api/register', hc.register);

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} chipmunks gnawing on acorns.`))