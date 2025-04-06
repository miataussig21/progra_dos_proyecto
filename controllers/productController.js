const controlador = {
  product: function(req, res, next) {
    res.render('product', { title: 'Express' });
  },
	productAdd: function(req, res, next) {
        res.render('product-add', { title: 'Express' });
      },
}
