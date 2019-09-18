var bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    express     = require("express"),
    app         = express();
//APP CONFIGURATION
mongoose.connect("mongodb://localhost:27017/mykogram", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
//MONGOOSE/MODEL CONFIGURATION
var mykoSchem = new mongoose.Schema({
    title: String,
    image: {type: String, default:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUTBxQVFRMTFRUWFxYVFRgTGhgWGBIWFhUSFhcYHSggJCElJxYfITEhJSkrLi4uHTMzODMuNzAwMC4BCgoKDg0NGhAQGi0lHR0tKy0tLS0rLS0tLSstLystLS0tLS0uKy0tKy0tLS0tLS0tKy0tLS0tLTc3LSsrNysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAABQIEBgMBB//EADIQAQABAwEFBQYGAwAAAAAAAAABAgMEEQUhMUFhElFxkbEiI6HB0fATFDIzcuFigfH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgMBBP/EAB0RAQEBAQEBAAMBAAAAAAAAAAABAhExAxIhUUH/2gAMAwEAAhEDEQA/AP0QB6WYAAAAAAAADK3bru1aW4mfAGI37Oyciv8Ac0p+M/Bt29j2Y/cmZ+CbuO8qKLeVjYWJY1qp15RvnfKJVPaq7vAl65zgAoAAAAAAAAAAAAAAAAGdizcv16Wo1n74vfAwq8qvfupjjPyhfs2bdijS1GkI1vjsnWhi7It0b8idZ7o4KNFFNunSiIiOm5kMrbVcAHHXjl49GVZ7Nf8Aqe6e9z2Vi3cWvS5HhPKXTsLtqi9RpcjWJVnXHLOuVG3tDBqxatY30zwnu6S1G0vUADoAAAAAAAAAAAAMrNubt2KaeMzoxb+xaO1mazyiZ+TlvILdm1TZtRTRwhmDztAAAAAAGF23TetzTXwlzF63Nm7NNXKdHVIO26Ozl6xziPhuX87++J00AGyQAAAAAAAAAAABT2D+7V4R6pinsGff1eEeqd+Oz1aAYLAAAAAAEbb0e8o8J9YWUXb0+9p8J9VY9c14mAN0AAAAAAAAAAAAChsOdMuf4z6wnqWxrF38ft6ezpMap147PVsBgsAAAAAAQ9uzrlR/H5yuIu2rF2b3b09nSI1Vj1zXiYA3QAAAAAAAAAAAAL+xqu1gx0mY+OvzQFjYNXsVR1ifOP6Rvx2eqoDFYAAAAAA0tsVdnBnrMR8dfk3Urb1WlqmO+Znyj+3c+uXxHAehAAAAAAAAAAAAA2dn5X5W/rxid0+fFrPjlnR1w8cO5+Li0z3xHnwl7PO0AAAAAAHObRyvzN/duinWI8+K9l3Pwsaqe6J8+Tlmnzn+p1X0BqkAAAAAAAAAAAAABY2Hf1omieW+PDmquVs3arF2KqOMfejqKKu3RE98asdzlVmsgEKAAAfKp7NOs8gTNuX+zaiiOM758I+/gjM796q/dmqvjP3owb5nIzt6AKAAAAAAAAAAAAAADi6u3HZtxHdEejl8eibl+mI5zHq6pl9FZAGagAB8rjtUzHR9AclpoPTJo/DyKo/yn1eb0MwB0AAAAAAAAAAAAAZ2rVy9VpaiZn74gtbFo7OJr3zP0UHnj2os2IpjlH/Xo89va0gA4AAAANDbVHaw9e6Yn5fNBdTkW4vWZpnnGjmb1m5Zq0uxMT98Gvzv64nTABokAAAAAAAACI1nc3MfZmRe/VHZjr9HLZBpvWxjXsifdRr15ea1j7Lx7X6/anrw8m7EREbkX6fxX4peNseinfkTr0jdHmpW7dFunS3ERHRmM7bXeADjoAAAAAAxuW6LlOlyImOrIBLydj0Vb8edOk74S7+Lex597Ex14x5uofJiJjeubscscmL+RsvHu/p9menDyTcjZeRa/T7UdPo0m5U8aQTExO8U4AA+0UVV1aURrPdCnjbIqq35E6dI4+ali4trFo0t8ec85e7K7/ipl42MWzYj3URHXn5vYGagAAAAAAAAAAAAAAAAAHjfxrN+PexE9efmmZOyKqd+POvSfqsjs1Y5xyddFVurSuNJ7pHS5WLbyqNLkeE84Gk3E/i9wGSwAAAAAAAAAAAAAAAAAAAAAAAH/9k="},
    body: String,
    created: {type: Date, default: Date.now}
});
var Myko = mongoose.model("Myko", mykoSchem);

//RESTful ROUTES
app.get("/", (req, res) => {
    res.redirect("/mykos");
});
app.get("/mykos", (req, res) => {
    Myko.find({},(err, mykos) => {
        if(err){
            console.log(err);
        } else {
            res.render("index", {mykos: mykos});
        }
    });
});
//NEW ROUTE
    app.get("/mykos/new", (req, res) => {
        res.render("new");
    });
//CREATE ROUTE
app.post("/mykos", (req, res) => {
    //create blog
    Myko.create(req.body.mykos, (err, newMyko) => {
        if(err){
            console.log(err);
            res.render("new");
        } else {
            res.redirect("/mykos");
        }
    });
    //then, redirect
});

app.listen(3000, () => {
    console.log("The mykogram Server has started!");
});
