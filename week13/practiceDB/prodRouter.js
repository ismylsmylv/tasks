const router = require("express").Router();
const prodController = require("./prodController");

router.get("/products", prodController.getAll)
router.get("/products/:id", prodController.getID)
router.post("/api/", prodController.postProd)
router.delete("/api/:id", prodController.deleteProd)

module.exports = router