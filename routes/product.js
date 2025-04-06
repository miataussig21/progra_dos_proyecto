var express = require('express');
var router = express.Router();

router.get('/', productController.product)
router.get('/add', productController.productAdd)

module.exports = router;
