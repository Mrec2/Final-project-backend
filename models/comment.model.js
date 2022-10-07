const { Schema, model } = require('mongoose');

const CommentSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'user' },
        post: { type: Schema.Types.ObjectId, ref: 'posts' },
        comment: { type: String, required: true }
    },
    {
        timestamps: true,
    }
);

const CommentModel = model('comments', CommentSchema);

module.exports = CommentModel;