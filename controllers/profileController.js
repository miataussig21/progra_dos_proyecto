const modulo = require("../db/modulo")

const controlador = {
    profile: function(req,res){
        res.render('profile', {Nombre: modulo.usuario.usuario});
    }
}

module.exports = controlador 