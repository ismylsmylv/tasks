const User = require("./userModel")
const getAll = async (req, res) => {
    console.log("asdasd")
    let all = await User.find({})
    console.log(all)
    res.send(all)
}


const getId = async (req, res) => {

    const item = await User.findById(req.params.id);
    res.json(item);
};

const poster = async (req, res) => {
    const elem = await User.create(req.body)
    res.json(elem)
}


const deleter = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'deleted' });
}


module.exports = { getAll, getId, poster, deleter }
