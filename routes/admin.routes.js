const router = require("express").Router();


router.get("/", (req, res, next) => {
    res.json({
        message: "ADMIN Routes works"
    });
});


module.exports = router;