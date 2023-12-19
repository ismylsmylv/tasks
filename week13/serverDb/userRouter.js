const router = require("express").Router();
const userControllers = require("./userController");

// router.get("/users", userControllers.getAll);
router.get("/users", userControllers.getAll);
router.get("/users/:id", userControllers.getId);

module.exports = router;