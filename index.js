var express = require("express");
const path = require("path");

var app = express();
app.set('view engine', 'ejs');
app.use("/static", express.static("static"));

require("./routes")(app)



var server = app.listen(3000, function () {
  console.log("Running on :3000");
});
