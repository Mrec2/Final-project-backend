const { Schema, model } = require('mongoose');

const PostSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        description: { type: String },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const PostModel = model('Post', PostSchema);

module.exports = PostModel;