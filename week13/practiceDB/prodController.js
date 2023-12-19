const Products = require("./prodModel")


const getAll = async (req, res) => {
    let all = await Products.find({})
    console.log(all)
    res.send(all)
}


const getID = async (req, res) => {
    let filtered = await Products.findById(req.params.id)
    res.send(filtered)
}

module.exports = { getAll, getID }