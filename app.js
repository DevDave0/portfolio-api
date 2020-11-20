const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendgrid/mail');


const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.get('/api', (req, res, next) => {
    res.send('API Status: Running')
});

app.listen(3030, '0.0.0.0');