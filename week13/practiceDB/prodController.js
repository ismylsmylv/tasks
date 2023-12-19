const Products = require("./prodModel")


const getAll = async (req, res) => {
    let all = await Products.find({})
    console.log(all)
    res.send(all)
}


module.exports = { getAll }