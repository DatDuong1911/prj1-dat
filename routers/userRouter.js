const { json } = require("body-parser");
const { request } = require("express");

var express = require("express")
const userService = require("../services/user")
var router = express.Router()


//hien thi du lieu trong database
router.get("/", function(req, res) {
    userService.getAllUser()
        .then((result) => {
            res.status(200).json({
                error: false,
                mess: "Hien thi toan bo du lieu",
                data: result
            })
        }).catch((err) => {
            res.status(500).json({
                error: true,
                mess: err
            })
        });
})


//hien thi du lieu theo id
router.get("/:id", function(req, res) {
        var id = req.params.id
        userService.getUser(id)
            .then((user) => {
                res.status(200).json({
                    error: false,
                    mess: "Hien thi nguoi dung thanh cong",
                    data: user
                })
            }).catch((err) => {
                res.status(500).json({
                    error: true,
                    mess: err
                })
            });
    })
    //them moi nguoi dung
router.post("/", function(req, res) {
        var username = req.body.username
        var password = req.body.password
        var email = req.body.email
        var age = req.body.age
        var school = req.body.school

        userService.checkUser(req.body.username, req.body.email)
            .then((response) => {
                if (response) {
                    return res.json({
                        mess: "Ton tai ten nguoi dung hoac email"
                    })
                } else {
                    userService.createUser(username, password, email, age, school)
                        .then((result) => {
                            return res.json({
                                error: false,
                                mess: "Dang ky thanh cong"
                            })
                        })

                }
            }).catch((err) => {
                return res.json({
                    error: true,
                    message: "Loi server"
                })
            });
    })
    //cap nhat nguoi dung

router.put("/:id", function(req, res) {
    var id = req.params.id

    userService.updateUser(id, req.body)
        .then((result) => {
            res.status(200).json({
                error: false,
                mess: "Cap nhat nguoi dung thanh cong"
            })
        }).catch((err) => {
            res.status(500).json({
                error: true,
                message: err,
            })
        });
})

router.delete("/:id", function(req, res) {
    var id = req.params.id
    userService.deleteUser(id)
        .then((result) => {
            res.status(200).json({
                error: false,
                mess: "Xoa nguoi dung thanh cong"
            })
        }).catch((err) => {
            res.status(500).json({
                error: true,
                message: err,
            })
        });
})


router.post("/login", function(req, res) {
    var email = req.body.email
    var password = req.body.password
    userService.login(email, password)
        .then((data) => {
            if (!data) {
                return res.json({
                    error: true,
                    mess: "Sai email dang nhap hoac mat khau"
                })
            }
            return res.json({
                error: false,
                mess: "Dang nhap thanh cong"
            })
        }).catch((err) => {
            res.json("Khong the ket noi duoc den server")
        });
})
module.exports = router;