
const modulo = require("../db/modulo")

const controlador = {
  product: function(req, res, next) {
    res.render('product', {Nombre: modulo.productos.comentarios, Email: modulo.usuario.email, foto:modulo.productos.comentarios, texto: modulo.productos.comentarios, usuario:modulo.productos.comentarios.usuario});
  },
	productAdd: function(req, res, next) {
        res.render('product-add', {title: express});
      },
}

module.exports = controlador;