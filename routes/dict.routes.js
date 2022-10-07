const router = require('express').Router();
const WordsModel = require("../models/words.model")
const { getAll, getOne, create, updateOne, deleteOne } = require("../controller/words.controller");


router.get("/words", getAll);

router.get("/word/:id", getOne);

router.post("/addwords", create);

router.put("/:id/edit", updateOne);

router.delete("/:id/delete", deleteOne);








module.exports = router;


