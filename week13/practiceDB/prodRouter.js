const router = require("express").Router();
const prodController = require("./prodController");

router.get("/products", prodController.getAll)

module.exports = router