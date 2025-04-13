const modulo = require("../db/modulo")

const controlador = {
    search: function(req,res){
        res.render('search-results', {Nombre: modulo.productos.detalles[3].nombre, Foto: modulo.productos.detalles[3].imagen});
    }
}

module.exports = controlador 