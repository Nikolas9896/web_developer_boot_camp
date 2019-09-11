var express = require("express");
var app = express();


var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req, res){
    var friends = ["Volodymyr", "Yuriy", "Bogdan", "Yaroslav", "Roman", "Nazar"];
    res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req, res){
    console.log(req.body);
    res.send("You Have reached the POST ROUTE");
});

app.listen(3000, function(){
    console.log("Server started! PORT 3000!");
});