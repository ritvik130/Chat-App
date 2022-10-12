/* eslint-disable no-undef */
const express = require('express');
const { chats } = require('./data/data.js');

const app = express();

app.get('/', (req, res) => {
    res.send('API is live')
});

app.get('/api/chat', (req, res) => {
    res.send(chats)
});

app.listen(8000, console.log('Server started on port 8000'));