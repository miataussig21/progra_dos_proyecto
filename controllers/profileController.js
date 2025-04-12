const modulo = require("../db/modulo")

const controlador = {
    profile: function(req,res){
        res.render('profile', {Nombre: modulo.usuario.usuario, Email: modulo.usuario.email, Foto:modulo.usuario.foto, Producto: modulo.productos.detalles, Imagen: modulo.productos.detalles, Texto: modulo.productos.detalles});
    }
}

module.exports = controlador 