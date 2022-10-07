const router = require('express').Router();
const { createComment, deleteComment, updateComment } = require('../controller/comment.controller');

router.post("/createcomment", createComment);
router.get("/getcomment");
router.delete("/deletecomment/:id", deleteComment);
router.put("/updatecomment/:id", updateComment);

module.exports = router;