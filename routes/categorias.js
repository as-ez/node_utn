var express = require("express");
var router = express.Router();
const categoriasController = require("../controllers/categoriasController");

router.get("/",categoriasController.getAll);
router.post("/",categoriasController.create);

module.exports = router;
