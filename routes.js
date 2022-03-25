const setVariables = require('./middlewares/setVariables');

require('./middlewares/setVariables')
module.exports = function (app) {
  app.get("/", function (req, res, next) {
    res.redirect("/bed");
  });
  app.get("/bed", setVariables, function (req, res, next) {
    res.render("bed/index", res.variables);
  });

  app.get("/bed/:id", function (req, res, next) {
    const resource = req.path.split("/")[1]
    res.render("beds/details", {});
  });

  app.get("/user", function (req, res, next) {
    res.render("user", {});
  });

  app.get("/reservation", function (req, res, next) {
    res.render("reservations", {});
  });

  app.get("/reservation/:id", function (req, res, next) {
    res.render("reservation", {});
  });
};
