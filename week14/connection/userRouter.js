const router = require("express").Router()
const userController = require("./userController")

router.get("/", userController.getAll)


module.exports = router