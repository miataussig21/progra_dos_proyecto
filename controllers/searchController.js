const modulo = require("../db/modulo")
const db = require("../database/models")

const controlador = {
    search: function(req,res){
        res.render('search-results', {Nombre: modulo.productos.detalles, Imagen: modulo.productos.detalles, Texto: modulo.productos.detalles});
    }
}

module.exports = controlador 