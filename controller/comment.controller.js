
const router = require('express').Router();
const CommentModel = require('../models/comment.model');
const PostModel = require('../models/post.model');

const createComment = (req, res, next) => {

    const { user, comment, post } = req.body;
    CommentModel.create({ user, comment, post })
        .then((newComment) => {
            return PostModel
                .updateOne(
                    { _id: post }, { $push: { comments: newComment._id } }
                );

        })
        .then(response => res.status(200).json(response))
        .catch((err) => next(err));
};

const deleteComment = (req, res, next) => {

    CommentModel
        .findByIdAndDelete(req.params.id)
        .then(() => res.json({
            message: "deleted comment!!"
        }))
        .catch(err => next(err));
}

const updateComment = (req, res, next) => {
    try {
        const { id } = req.params;
        const {
            comment,
        } = req.body;
        CommentModel
            .findByIdAndUpdate(id, {
                comment,
            })
            .then(() => {
                res.status(204).json({ message: "Comment was changed" });
            })
            .catch(next);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
}


module.exports = { createComment, deleteComment, updateComment };