const modulo = require('../db/modulo')

const controlador = {
    index: function(req, res, next) {
        res.render('index', {Nombre: modulo.productos.detalles, Imagen: modulo.productos.detalles, Texto: modulo.productos.detalles});
      }
}

module.exports = controlador