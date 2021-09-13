var express = require('express');
var router = express.Router();

const productosController = require("../controllers/productosController");

router.get('/', productosController.getAll);
router.get('/destacados', productosController.getDestacado);
router.get('/:id', productosController.getById);
router.post('/',(req,res,next)=>{req.app.validateUser(req,res,next)},productosController.create);
router.put('/:id',(req,res,next)=>{req.app.validateUser(req,res,next)}, productosController.update);
router.delete('/:id',(req,res,next)=>{req.app.validateUser(req,res,next)}, productosController.delete);

module.exports = router;
