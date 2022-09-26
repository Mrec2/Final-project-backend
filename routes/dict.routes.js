const router = require('express').Router();
const WordsModel = require("../models/Words.model")

router.get("/words", (req, res, next) => {


    WordsModel.find()
        .then((words) => {
            console.log(words)
            res.json(words)
        })
        .catch((err) => console.log(err))
});


router.get("/home", (req, res, next) => {


});

router.get("/home", (req, res, next) => {


});




module.exports = router;