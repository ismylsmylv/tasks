const router = require("express").Router();
const userControllers = require("./userController");

// router.get("/users", userControllers.getAll);
router.get("/", userControllers.getAll);
router.get("/:id", userControllers.getId);
router.post('/api', userControllers.poster);
router.delete('/api/:id', userControllers.deleter);


module.exports = router;