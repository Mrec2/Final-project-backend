const { Schema, model } = require('mongoose');

const PostSchema = new Schema(
    {

        title: { type: String, required: true },
        description: { type: String, required: true },
        author: { type: Schema.Types.ObjectId, ref: 'user' },
        comments: [{ type: Schema.Types.ObjectId, ref: 'comments' }]
    },
    {
        timestamps: true,
    }
);

const PostModel = model('post', PostSchema);

module.exports = PostModel;