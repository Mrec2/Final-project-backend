const { Schema, model } = require("mongoose");
const { ROLES, USER } = require("../const/index");

//  TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: { type: String, required: true },
        password: { type: String, required: true },
        img: {
            type: String, default: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
        },
        role: { type: String, enum: ROLES, default: USER },
        description: { type: String, default: "Something" }
    },
    {

        timestamps: true,
        versionKey: false
    }
);

const UserModel = model("user", userSchema);

module.exports = UserModel;
