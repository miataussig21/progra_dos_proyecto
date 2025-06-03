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
  nuevoProducto: function(req, res, next){
    db.Producto.create({
      imagen: req.body.imagen,
      producto: req.body.producto,
      descripcion: req.body.descripcion
    })
    .then(function(result){
      res.redirect('/');
    }) 
    .catch(function(error){
      console.log(error)
    })
  },

	productAdd: function(req, res, next) {
      res.render('product-add');
  },
}

module.exports = controlador;