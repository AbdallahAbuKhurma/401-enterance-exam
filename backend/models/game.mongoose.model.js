'use atrict';

const mongoose = require('mongoose');

const gameDataSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true
    },

    slug: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true
    },

    gender:String,
    image:String,
    psiPowers: String
});

const gameDataModel = mongoose.model('game_data', gameDataSchema);

module.exports = gameDataModel;

