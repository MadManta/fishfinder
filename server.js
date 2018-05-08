var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('public'));

require("./app/routing/htmlroutes.js")(app);
require("./app/routing/apiroutes.js")(app);

// app.use(htmlroutes);
// app.use(apiroutes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });