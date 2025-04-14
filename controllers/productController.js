
const modulo = require("../db/modulo")

const controlador = {
  product: function(req, res, next) {
    res.render('product', {Producto: modulo.productos.detalles, Email: modulo.usuario.email, comment:modulo.productos.comentarios});
  },
	productAdd: function(req, res, next) {
        res.render('product-add', {Nombre: modulo.productos.comentarios[2].usuario});
      },
}

module.exports = controlador;