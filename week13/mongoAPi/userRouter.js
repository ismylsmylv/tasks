const router = require("express").Router();
const userControllers = require("./userController");

// router.get("/users", userControllers.getAll);
router.get("/", userControllers.getAll);

module.exports = router;