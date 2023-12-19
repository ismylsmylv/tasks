const Products = require("./userModel")

const getAll = async (req, res) => {
    let all = await Products.find({})
    console.log(all)
    res.send(all)
}


const getId = async (req, res) => {
    const item = await Products.findById(req.params.id);
    res.json(item);
};




module.exports = { getAll, getId }