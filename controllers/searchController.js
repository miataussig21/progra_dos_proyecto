const modulo = require("../db/modulo")
const db = require("../database/models")
const op = db.Sequelize.Op;

const controlador = {
    search: function(req,res){
        db.Producto.findAll({
            where: [{producto: {[op.like]:  `%${req.query.search}%`}}],
            include: [{association: "relacion_pu"}]
            
        })
        .then(function(result){
            if(result.length === 0){
            res.send("No hay resultados para su criterio de búsqueda")
            }
            else{
                 res.render("search-results", {Muestra: result})
            }
            
        })
    }
}

module.exports = controlador 