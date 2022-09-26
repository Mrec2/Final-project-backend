const router = require("express").Router();


router.get("/index", (req, res, next) => {
  res.json({
    message: "INDEX Routes works"
  });
});


module.exports = router;
