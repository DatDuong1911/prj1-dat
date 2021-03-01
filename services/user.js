const { findOne } = require("../models/userModel")
var userModel = require("../models/userModel")


function login(email, password) {
    return userModel.findOne({
        email: email,
        password: password
    })
}

function getAllUser() {
    return userModel.find()
}

function getUser(id) {
    return userModel.findOne({
        _id: id
    })
}

function createUser(username, password, email, age, school) {
    return userModel.create({
        username: username,
        password: password,
        email: email,
        age: age,
        school: school
    })
}

function updateUser(id, data) {
    return userModel.updateOne({
        _id: id
    }, data)
}

function checkUser(username, email) {
    return userModel.findOne({
        username: username,
        email: email
    })
}

function deleteUser(id) {
    return userModel.deleteOne({
        _id: id
    })
}


function login(email, password) {
    return userModel.findOne({
        email: email,
        password: password
    })
}
module.exports = {
    getAllUser: getAllUser,
    getUser: getUser,
    createUser: createUser,
    checkUser: checkUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    login: login
}