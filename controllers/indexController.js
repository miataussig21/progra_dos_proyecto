const modulo = require('../db/modulo')
const db = require("../database/models")

const controlador = {
    index: function(req, res, next) {
        res.render('index', {producto: modulo.productos.detalles});
      }
}

module.exports = controlador