const express = require("express");
//const { urlencoded } = require("body-parser");

const PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));



app.use(express.urlencoded({ extended: true }));
app.use(express.json());



var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controllers");

app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});