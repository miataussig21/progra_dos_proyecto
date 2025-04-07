var express = require("express");
var router = express.Router();
const loginController = require("../controllers/loginController")



router.get("/", function(req,res){
    res.render();
})


module.exports = router;