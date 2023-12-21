const router = require("express").Router()
const userController = require("./userController")

router.get("/", userController.getAll)
router.get("/:id", userController.getById)
router.post("/", userController.postUser)
router.delete("/:id", userController.deleteUser)
router.patch("/:id", userController.updater)
router.put("/:id", userController.putter)

module.exports = router