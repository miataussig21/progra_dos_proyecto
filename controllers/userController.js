const modulo = require("../db/modulo")
const db = require("../database/models")

const controlador = {
    login: function(req,res){
        res.render('login');
    }, 
    process: function(req, res){
        db.Usuario.findOne({
            where: [{email: req.body.email}]
        })
        .then(function(usuario){
            if(usuario != undefined){
                res.redirect('/login')
            } else {
                res.send("ERROR")
            }
        })
    },


    register: function(req,res){
        res.render('register');
    }, 
    create: function(req, res){
        db.Usuario.create({
            name: req.body.usuario,
            email: req.body.email,
            contrasenia: req.body.contraseña,
            fecha_de_nacimiento: req.body.fecha,
        })

    },
    profile: function(req,res){
        res.render('profile', {Nombre: modulo.usuario.usuario, Email: modulo.usuario.email, Foto:modulo.usuario.foto, Producto: modulo.productos.detalles, Imagen: modulo.productos.detalles, Texto: modulo.productos.detalles});
    }

}

module.exports = controlador