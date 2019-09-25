var express             = require("express"),
mongoose                = require("mongoose"),
passport                = require("passport"),
bodyParser              = require("body-parser"),
User                    = require("./models/user"),
LocalStrategy           = require("passport-local"),
passportLocalMongoose   = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost:27017/auth_demo_app", {useNewUrlParser: true });


var app = express();
app.set('view engine', 'ejs');
app.use(require("express-session")({
    secret: "Danylo is the best and cutest son in the world",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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