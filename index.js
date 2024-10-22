const express = require('express');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/login', (req, res) => {
    res.send('Login Page');
})


app.listen(PORT, () => {
    console.log('Listening on port 777');
})