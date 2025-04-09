const controlador = {
    index: function(req, res, next) {
        res.render('index', {title: "express"});
      }
}

module.exports = controlador