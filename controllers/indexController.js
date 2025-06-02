const modulo = require('../db/modulo')
const db = require("../database/models")

const controlador = {
    index: function(req, res, next) {
      db.Producto.findAll()
      .then(function(resultados){
          res.render('index', {producto: resultados,
            user: req.session.user
          }); 
        
        
      })
      }
}

module.exports = controlador