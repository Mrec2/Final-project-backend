const router = require('express').Router();
const WordsModel = require("../models/Words.model")
const { getAll, getOne, create, updateOne, deleteOne } = require("../controller/words.controller");


router.get("/words", getAll);

router.get("/words/:id", getOne);

router.post("/addwords", create);

router.put("/:id/edit", updateOne);

router.delete("/:id/delete", deleteOne);








module.exports = router;


