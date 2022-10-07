const router = require('express').Router();
const { GetUser, GetUsers, currentUser } = require('../controller/user.controller');

router.get("/list", GetUsers);
router.get('/getOneUser/:id', GetUser);
router.get('/me', currentUser)

module.exports = router;

