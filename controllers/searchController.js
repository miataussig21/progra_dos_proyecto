const modulo = require("../db/modulo")
const db = require("../database/models")
const op = db.Sequelize.Op;

const controlador = {
    search: function(req,res){
        db.Producto.findAll({
            where: [{producto: {[op.like]:  `%${req.query.search}%`}}]
        })
        .then(function(result){
            res.render("search-results", {Muestra: result})
        })
    }
}

module.exports = controlador 