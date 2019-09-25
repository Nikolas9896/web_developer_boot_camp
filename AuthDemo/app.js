var express             = require("express"),
mongoose                = require("mongoose"),
passport                = require("passport"),
LocalStrategy           = require("passport-local"),
bodyParser              = require("body-parser"),
passportLocalMongoose   = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost:27017/auth_demo_app", {useNewUrlParser: true });



var app = express();

//
app.set('view engine', 'ejs');

//ROUTES
app.get('/', (req, res) => {

    res.render('home');

});

app.get('/secret', (req, res) => {
    
    res.render('secret');

});


app.listen(3000, () => {
    console.log("The AuthDemo Server has started!");
});