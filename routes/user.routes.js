const router = require('express').Router();
const { GetUser } = require('../controller/user.controller');

// router.get("/home", (req, res, next) => {
//     res.json({
//         message: "USER routes works!!"
//     })
// });



router.get('/me', GetUser)




module.exports = router;

