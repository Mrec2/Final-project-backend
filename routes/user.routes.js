const router = require('express').Router();
const UserModel = require("../models/User.model")

router.get("/home", (req, res, next) => {
    res.json({
        message: "USER routes works!!"
    })
});


router.get("/signup", (req, res, next) => {


});

router.get("/login", (req, res, next) => {


});




module.exports = router;