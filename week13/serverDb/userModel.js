const mongoose = require("mongoose");


const userSchema = mongoose.Schema(

    {
        username: String,
    },

    { collection: "Datas", timestamps: true }
);

const Products = mongoose.model("Datas", userSchema);

module.exports = Products;