const router = require("express").Router();
const dataController = require("./dataController");

router.get("/datas", dataController.getAll)
router.get("/datas/:id", dataController.getId)
router.delete("/datas/:id", dataController.deleter)
router.post("/datas/", dataController.poster)

module.exports = router