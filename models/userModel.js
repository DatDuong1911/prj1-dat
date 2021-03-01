var mongoose = require("../config/dbConfig")
var Schema = mongoose.Schema
var userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    age: Number,
    school: String
})


var userModel = mongoose.model("prj", userSchema)

module.exports = userModel