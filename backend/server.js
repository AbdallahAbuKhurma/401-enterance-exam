const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const DB = process.env.DATABASE_URL;

const gameController = require('./controllers/game.controller')
const gameCrud = require('./controllers/game.crud.controller');

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());


// API proof of life
app.get('/', (req, res) => {
    res.send('everything is working!')
});

app.get('/game', gameController.getGameData);

app.get('/game/fav', gameCrud.getGameData);
app.post('/game/fav', gameCrud.createGameData);
app.delete('/game/fav:slug', gameCrud.deleteGameData);
app.put('/game/fav:slug', gameCrud.updateGameData);


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});