const modulo = require('../db/modulo')
const db = require("../database/models")

const controlador = {
    index: function(req, res, next) {
      db.Producto.findAll({
        include: [{association: 'relacion_pu'}]
      })
      .then(function(resultados){
          res.render('index', {producto: resultados}); 
        
        
      })
      }
}

module.exports = controlador