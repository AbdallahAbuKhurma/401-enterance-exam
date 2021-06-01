'use strict';

const gameData = require('../models/game.mongoose.model');

const createGameData = async (req, res) => {
    const {
        name,
        gender,
        image,
        psiPowers
    } = req.body;

    const slug = `${name}`.toLowerCase().split(' ').join('-');

    gameData.find({slug : slug}, (err, data) => {
        if(data.length > 0) {
            res.send('The data is already exists');
        } else{
            const newGameData = new gameData({
                name: name,
                gender: gender,
                image: image,
                psiPowers: psiPowers
            });
            newGameData.save();
            res.send('Item added to your fav');
        }
    });
}

const getGameData = async (req, res) => {
    gameData.find({}, (err, data) => {
        res.send(data);
    });
}

const deleteGameData = async (req, res) => {
    const slug = req.params.slug;

    gameData.remove({slug: slug}, (err, data) => {
        if(err){
            res.send(err);
        }else{
            gameData.find({slug : slug}, (err, data) => {
                res.send(data);
            });
        }
    });
}

const updateGameData = async (req, res) => {
    const slug = req.params.slug;

    const {name, gender} = req.body;

    gameData.find({slug: slug}, (err,data) => {
        if(err){
            res.send(err);
        }else{
            data[0].name = name;
            data[0].gender = gender;
            data[0].save();
            gameData.find({}, (err, data) => {
                res.send(data);
            });
        }
    });

}

module.exports = {
    createGameData,
    getGameData,
    deleteGameData,
    updateGameData
}