require('dotenv/config');

const mongoose = require('mongoose');
const wordsModel = require('../models/Words.model');
const words = require('./enEsPy.json');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/lastProjectBackend';

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    .then(() => {

        return wordsModel.insertMany(words);
    })
    .then(() => {
        console.log('dict-words created');
    })
    .catch((err) => {
        console.error('Error connecting to mongo: ', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });