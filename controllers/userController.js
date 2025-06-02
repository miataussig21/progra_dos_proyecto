const modulo = require("../db/modulo")
const db = require("../database/models")
const bcrypt = require('bcryptjs');


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
                let check = bcrypt.compareSync(req.body.contraseña, usuario.contraseña)
                if (check == true){

                        req.session.user = usuario
                        res.redirect('/')
                } else {
                    res.send("La contraseña es incorrecta")
                }
            } else {
                res.send("No se encontro su email")
            }
        })
    },

    //if (req.body.Recordarme){
    //}

    logout: function(req, res){
        req.session.destroy();
        res.redirect('/')
    },

    register: function(req,res){
        res.render('register');
    }, 

    create: function(req, res){

        console.log(req.body.fecha);
        

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
            email: req.body.email,
            contraseña: bcrypt.hashSync(req.body.contraseña, 10),
            fecha: req.body.fecha,  
            identificacion: req.body.documento
        })
        .then(function(user){
            res.redirect("/login")
        })

    },
    profile: function(req,res){
        db.Usuario.findByPk(req.params.id,{
            include: [{
                association: "relacion_up"
            }]
            
            })
            .then(function(usuario) {
                res.render('profile', {usuario: usuario})


        })
    }

}

module.exports = controlador