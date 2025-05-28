const modulo = require("../db/modulo")
const db = require("../database/models")
const bcrypt = require('bcryptjs')

const controlador = {
    login: function(req,res){
        res.render('login');
    }, 

    process: function(req, res){
        db.Usuario.findOne({
            where: [{email: req.body.email}]
        })
        .then(function(usuario){
            if(usuario != null){
                let check = bcrypt.compareSync(req.body.contraseña, usuario.contrasenia)
                if (check == True){
                    res.redirect('/')
                } else {
                    res.send("La contraseña es incorrecta")
                }
            } else {
                res.send("No se encontro su email")
            }
        })
    },

    register: function(req,res){
        res.render('register');
    }, 

    create: function(req, res){
        if (req.body.email == ""){
            res.send("Completar el campo vacio")
        }
        if (req.body.contraseña < 3){
            res.send("La contraseña debe tener al menos 3 caracteres")
        }
        if (req.body.contraseña == ""){
            res.send("Completar el campo vacio")
        }

        db.Usuario.findOne({
            where: [{email: req.body.email}]
        })
        .then(function(result){
            if(result != null){
                res.send("Ese email ya esta registrado")
            }
        })
        db.Usuario.create({
            name: req.body.usuario,
            email: req.body.email,
            contrasenia: bcrypt.hashSync(req.body.contraseña, 10),
            fecha_de_nacimiento: req.body.fecha,
        })
        .then(function(user){
            res.redirect("/login")
        })

    },
    profile: function(req,res){
        res.render('profile', {Nombre: modulo.usuario.usuario, Email: modulo.usuario.email, Foto:modulo.usuario.foto, Producto: modulo.productos.detalles, Imagen: modulo.productos.detalles, Texto: modulo.productos.detalles});
    }

}

module.exports = controlador