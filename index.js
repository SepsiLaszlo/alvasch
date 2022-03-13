var express = require("express");
const path = require("path");

var app = express();

app.use("/static", express.static("static"));

app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/static/bed.html"));
});
app.get("/bed", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/static/bed.html"));
});

app.get("/user", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/static/user.html"));
});

app.get("/reservation", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/static/reservation.html"));
});

app.get("/reservation/:id", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/static/reservation-1.html"));
});

var server = app.listen(3000, function () {
  console.log("Running on :3000");
});
