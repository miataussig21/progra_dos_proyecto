
const modulo = require("../db/modulo")
const controlador = {
  product: function(req, res, next) {
    res.render('product', {Nombre: modulo.usuario.usuario, Email: modulo.usuario.email, Foto:modulo.usuario.foto, texto: modulo.productos.comentarios[0].texto, usuario:modulo.productos.comentarios.usuario});
  },
	productAdd: function(req, res, next) {
        res.render('product-add', {title: express});
      },
}

module.exports = controlador;