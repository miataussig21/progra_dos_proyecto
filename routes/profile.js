var express = require("express");
var router = express.Router();
const profileController = require("../controllers/profileController")

router.get("/", profileController.profile)

module.exports = router;