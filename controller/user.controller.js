const UserModel = require('../models/user.model');

const GetUser = (req, res, next) => {
    const { id } = req.params;
    UserModel.findById(id)
        .select('email role username').then((user) => {
            if (user) {
                res.status(200).json(user)
            } else {
                res.sendStatus(404);
            }
        })


}

const GetUsers = (req, res, next) => {
    console.log("entra")

    UserModel.find()
        .then(user => {

            if (user) {
                res.status(200).json(user)
            } else {
                res.sendStatus(404);
            }
        })
        .catch(err => console.log(err));

}


const currentUser = (req, res, next) => {
    if (req.user) {
        UserModel.findById(req.user._id).select('email role username').then((user) => {
            if (user) {
                res.status(200).json(user)
            } else {
                res.sendStatus(404);
            }
        })
    } else {
        res.sendStatus(401);
    }
}



module.exports = {
    GetUser,
    GetUsers,
    currentUser
}