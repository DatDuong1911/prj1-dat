var express = require('express')
var bodyParser = require('body-parser')
var port = 1996
var app = express()

var indexRouter = require("./routers/index")
var userRouter = require("./routers/userRouter")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static("public"))

app.use("/user", userRouter)
app.use("/", indexRouter)

app.listen(port, function() {
    console.log("Server dang hoat dong tai port: " + port);
})