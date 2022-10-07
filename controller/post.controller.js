
const router = require('express').Router();
const PostModel = require('../models/post.model');
const UserModel = require('../models/user.model');

const createPost = (req, res, next) => {

    const { title, description } = req.body;
    const author = req.user._id;

    PostModel
        .create({ title, description, author })
        .then((post) => {
            res.status(200).json(post);
        })
        .catch((err) => next(err));
};

const getPost = (req, res, next) => {

    PostModel.findById(req.params.id)

        .populate({ path: 'comments', populate: { path: 'user' } })
        .populate('author', 'username role -_id')
        .then((post) => {
            console.log(post);
            res.json(post)
        })

        .catch((err) => next(err));
};

const deletePost = (req, res, next) => {

    PostModel
        .findByIdAndDelete(req.params.id)
        .then(() => res.json({
            message: "deleted post!!"
        }))
        .catch(err => next(err));

}

const getAllPosts = (req, res, next) => {

    PostModel
        .find()
        .populate("author comments")
        .then(posts => {
            console.log("QUE TE LLEGA MARIO======>", posts)
            res.status(200).json(posts)
        })
        .catch(err => next(err));
}

const updatePost = (req, res, next) => {
    try {
        const { id } = req.params;

        const {
            title,
            description,

        } = req.body;

        PostModel
            .findByIdAndUpdate(id, {
                title,
                description,

            })
            .then(() => {
                res.status(204).json({ message: "Post was changed" });
            })
            .catch(next);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};

module.exports = { createPost, getPost, deletePost, getAllPosts, updatePost };


