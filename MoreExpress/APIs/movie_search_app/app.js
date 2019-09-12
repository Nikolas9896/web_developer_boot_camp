var express = require("express");

var app = express();
var request = require("request");

app.get("/results", (req, res) => {
    res.send("hello, it works")
});



app.listen(3000, function(){
    console.log('Movie start listening on port 3000');
});