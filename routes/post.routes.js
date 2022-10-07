const router = require('express').Router();
const { updateComment } = require('../controller/comment.controller');
const { createPost, getPost, getAllPosts, deletePost, updatePost } = require('../controller/post.controller');
const validateToken = require('../middleware/validateToken.middleware');

router.post("/createpost", validateToken, createPost);
router.get("/getpost/:id", getPost);
router.delete("/deletepost/:id", deletePost);
router.get("/getallposts", getAllPosts);
router.put("/updatepost/:id", updatePost);

module.exports = router;