const router = require("express").Router();
const prodController = require("./prodController");

router.get("/products", prodController.getAll)
router.get("/products/:id", prodController.getID)

module.exports = router