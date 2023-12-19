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

const deleteProd = async (req, res) => {
    await Products.findByIdAndDelete(req.params.id)
    res.json({ message: "deleted" })
}
const postProd = async (req, res) => {
    const elem = await Products.create(req.body)
    res.json(elem)
}
module.exports = { getAll, getID, deleteProd, postProd }