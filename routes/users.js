var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")

/* GET users listing. */
router.get("/login", userController.login)
router.post('/postLogin', userController.process)
router.post("/logout", userController.logout)

router.get("/register", userController.register)
router.post('/newUser', userController.create)

router.get("/profile/:id", userController.profile)

module.exports = router;
