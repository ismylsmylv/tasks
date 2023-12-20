const router = require("express").Router()
const userController = require("./userController")

router.get("/orders", userController.getAll)
router.get("/orders/:id", userController.getId)
module.exports = router