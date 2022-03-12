var express = require("express");
var app = express();
app.get("/", function (req, res, next) {
  res.send("Hello World!");
});

app.use('/static', express.static('static'));
var server = app.listen(3000, function () {
  console.log("Running on :3000");
});
