const mongoose = require("mongoose");


const userSchema = mongoose.Schema(

    {
        name: String,
        price: Number
    },

    { collection: "products", timestamps: true }
);

const Products = mongoose.model("products", userSchema);

module.exports = Products;