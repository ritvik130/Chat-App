/* eslint-disable no-undef */
const express = require('express');
const { chats } = require('./data/data.js');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 8000
app.get('/', (req, res) => {
    res.send('API is now')
});

app.get('/api/chat', (req, res) => {
    res.send(chats)
});

app.get('/api/chat/:id', (req, res) => {
    console.log(req.params.id)
    const singleChat = chats.find((chat) => chat._id === req.params.id);
    res.send(singleChat);
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));