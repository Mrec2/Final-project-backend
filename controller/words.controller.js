const { isValidObjectId } = require('mongoose');
const WordsModel = require('../models/Words.model')

const getAll = (req, res, next) => {
    // const { offset = 0, limit = 100 } = req.query;
    // let words;
    WordsModel
        .find()
        // .limit(limit)
        // .skip(limit * offset)
        // .sort({ createdAt: -1 })
        // .lean()
        .then((wordsData) => {

            res.json(wordsData);
            // return WordsModel.countDocuments();
        })
        // .then((countWord) => {
        //     res
        //         .status(200)
        //         .json({
        //             results: words,
        //             page: +offset,
        //             maxPage: Math.floor(countWord / +limit),
        //         });
        // })
        .catch(err => console.log(err))
    // .catch(next);
};
const getOne = (req, res, next) => {
    try {
        const { id } = req.params;
        console.log('USER --> ', req.user);
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID');
        }
        WordsModel
            .findById(id)
            .then((word) => {
                res.status(200).json(word);
            })
            .catch(next);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};
const create = (req, res, next) => {
    const {
        word_en,
        word_es,
        word_py
    } = req.body;
    console.log(req.body);
    WordsModel
        .create({
            word_en,
            word_es,
            word_py
        })
        .then(() => {
            res.sendStatus(201);
        })
        .catch(next);
};
const updateOne = (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID');
        }
        const {
            word_en,
            word_es,
            word_py
        } = req.body;

        WordsModel
            .findByIdAndUpdate(id, {
                word_en,
                word_es,
                word_py
            })
            .then(() => {
                res.sendStatus(204);
            })
            .catch(next);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};
const deleteOne = (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID');
        }
        WordsModel
            .findByIdAndDelete(id)
            .then(() => {
                res.sendStatus(204);
            })
            .catch(next);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};

module.exports = {
    getAll,
    getOne,
    create,
    updateOne,
    deleteOne,
};