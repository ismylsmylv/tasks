const mongoose = require("mongoose");


const userSchema = mongoose.Schema(

    {
        name: String,
    },

    { collection: "this.APICALL", timestamps: true }
);

const Products = mongoose.model("APICALL", userSchema);

module.exports = Products;