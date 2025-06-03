var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController")

router.get('/add', productController.productAdd)
router.post('/nuevoProducto', productController.nuevoProducto)

router.get('/:id', productController.product)
router.post('/:id/comment', productController.cargandoComentario)


module.exports = router;
