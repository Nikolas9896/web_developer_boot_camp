var express = require("express");

var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.send("hello!");
});

app.listen(3000, function(){
    console.log("Server started! PORT 3000!");
});