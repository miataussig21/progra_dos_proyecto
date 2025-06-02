const modulo = require("../db/modulo")
const db = require("../database/models")


const controlador = {
  product: function(req, res, next) {
    let producto = req.params.id

    db.Producto.findByPk(producto)
    .then(function(result){
      // return res.send(result)
      res.render('product', {producto: result, comment: modulo.productos.comentarios});
    })
  },
	productAdd: function(req, res, next) {
        res.render('product-add', {Nombre: modulo.productos.comentarios[2].usuario});
      },
}

module.exports = controlador;