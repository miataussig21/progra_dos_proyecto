const modulo = require("../db/modulo")
const db = require("../database/models")


const controlador = {
  product: function(req, res, next) {
    res.render('product', {Producto: modulo.productos.detalles, comment:modulo.productos.comentarios});
  },
	productAdd: function(req, res, next) {
        res.render('product-add', {Nombre: modulo.productos.comentarios[2].usuario});
      },
}

module.exports = controlador;