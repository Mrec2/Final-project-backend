const router = require('express').Router();


router.get("/post", (req, res, next) => {
    res.json({
        message: "POST routes works!!"
    })
});

module.exports = router;