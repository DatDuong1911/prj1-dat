var userRouter = require('./userRouter');
var router = require("express").Router();

var path = require("path")
router.get("/sign-up", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/sign-up.html"))
})
router.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"))
})
router.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/login.html"))
})
router.get("/detail-user/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/detailUser.html"))
})

module.exports = router