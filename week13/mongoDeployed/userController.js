const users = require("./userModel")

const getAll = async (req, res) => {
    let all = await users.find({})
    res.send(all)
}


const getById = async (req, res) => {
    let id = req.params.id
    let findUser = await users.findOne({ id: id })
    console.log(findUser)
    res.send(findUser)
}


const postUser = async (req, res) => {
    console.log(req.body)
    let finder = await users.findOne(({ id: req.body.id }))
    if (finder) {
        console.log("user exists")
    }
    else {
        const createdUser = new users(req.body)
        createdUser.save()
    }
    res.send(req.body)
}

const deleteUser = async (req, res) => {
    let id = req.params.id
    let finder = await users.findOne({ _id: id })
    let _id = finder._id
    let deletedUser = await users.findByIdAndDelete(_id)
    res.send(deletedUser)
}

const updater = async (req, res) => {
    let id = req.params.id
    let updated = await users.findOneAndUpdate({ id: id }, req.body)
    res.send(updated)
}

const putter = async (req, res) => {
    let id = req.params.id
    let putted = await users.replaceOne({ id: id }, req.body)
    res.send(putted)
}

module.exports = { getAll, getById, postUser, deleteUser, updater, putter }