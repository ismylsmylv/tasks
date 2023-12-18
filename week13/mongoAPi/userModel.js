const mongoose = require("mongoose");

const userSchema = mongoose.Schema(

    {
        username: String,
    },

    { collection: "Datas", timestamps: true }
);

const User = mongoose.model("Datas", userSchema);

module.exports = User;
