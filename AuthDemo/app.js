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
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "Danylo is the best and cutest son in the world",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//ROUTES
app.get('/', (req, res) => {

    res.render('home');

});

app.get('/secret', (req, res) => {
    
    res.render('secret');

});

//Auth Route

//show sign up form
app.get('/register', (req, res) => {
    res.render('register');
});
app.post('/register', (req, res) => {
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
        if(err){
            console.log(err.message);
            return res.render('register');
        } 
            passport.authenticate("local") (req, res, () => {
                res.redirect('/secret');
            });
    
    });
});

// LOGIN ROUTES

//render login form

app.get('/login', (req, res) => {
    res.render('login');
});
//login logic
//middleware
app.post('/login', passport.authenticate("local", {
    successRedirect: '/secret',
    failureRedirect: '/login'
}) , (req, res) => {

});
//logout
app.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
});

app.listen(3000, () => {
    console.log("The AuthDemo Server has started!");
});