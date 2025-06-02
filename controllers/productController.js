const db = require("../database/models")


const controlador = {
  product: function(req, res, next) {
    let producto = req.params.id

    db.Producto.findByPk(producto, {
      include: [{ association: "relacion_pc",
        include: [{ association: "relacion_cu"}]
      }]
    } )

    .then(function(result){
      
      res.render('product', {producto: result});
    })

  },
	productAdd: function(req, res, next) {
        res.render('product-add', {Nombre: modulo.productos.comentarios[2].usuario});
      },
}

module.exports = controlador;