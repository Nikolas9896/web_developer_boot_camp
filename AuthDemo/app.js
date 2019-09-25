var express     = require("express");



var app = express();

//mongoose.connect("mongodb://localhost:27017/", {useNewUrlParser: true });
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