var express = require("express");
const path = require("path");
const bodyParser = require('body-parser');


var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use("/static", express.static("static"));

require("./routes")(app)
app.use((err, req, res, next) => {
  res.end('Problem...');
  console.log(err);
});
require("./db/config")

const seed = require('./db/seed')
seed()
var server = app.listen(3000, function () {
  console.log("Running on :3000");
});
