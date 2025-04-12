
const modulo = require("../db/modulo")
const controlador = {
  product: function(req, res, next) {
    res.render('product', { title: 'Express' });
  },
	productAdd: function(req, res, next) {
        res.render('product-add', {Nombre: modulo.usuario.usuario, Email: modulo.usuario.email, Foto:modulo.usuario.foto});
      },
}

module.exports = controlador;