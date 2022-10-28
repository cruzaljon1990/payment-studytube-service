require('dotenv').config();
const PORT = process.env.PORT || 3001;
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || '*'
}));

app.get('/', (req, res) => res.send({
    message: 'Hello there!'
}));

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
