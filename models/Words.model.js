const { Schema, model } = require("mongoose");

const dictSchema = new Schema({

    word_en: { type: String },
    word_es: { type: String },
    word_py: { type: String }

},
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
        versionKey: false
    }
);

const WordsModel = model("dict", dictSchema);

module.exports = WordsModel;