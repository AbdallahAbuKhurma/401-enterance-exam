'use strict';

const GameModel = require('../models/game.model')

const superagent = require('superagent');

const getGameData = async (req, res) => {
  const url = process.env.API_URL;

  superagent.get(url).query().then(data => {
    const gameDataArray = data.body.map(game => new GameModel(game));
    res.send(gameDataArray)
  }).catch(error => {
    console.log('==================');
    console.log(error);
    console.log('==================');
  });
  
}

module.exports = {
  getGameData
}