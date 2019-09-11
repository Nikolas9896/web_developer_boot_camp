var express = require("express");

var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/fallinginlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts_here = [
        { title: "Post 1", author: "Mykola" },
        { title: "Post 2", author: "Anastasiia"},
        { title: "Post 3", author: "Anonymous"}
    ];
    res.render("posts", {posts: posts_here});
});

app.listen(3000, function(){
    console.log('Server listening on port 3000');
});