const modulo = require("../db/modulo")

const controlador = {
    search: function(req,res){
        res.render('search-results', {Nombre: modulo.productos.detalles[0].nombre, Foto: modulo.productos.detalles[0].imagen});
    }
}

module.exports = controlador 