var express = require("express");

var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/results", (req, res) => {
    request("http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb", (error, response, body) => {
     if(!error && response.statusCode == 200){
         var data = JSON.parse(body)
         res.render("results", {data: data});
         //res.send(results["Search"][0]["Title"]);
     }   
    });
});



app.listen(3000, function(){
    console.log('Movie start listening on port 3000');
});