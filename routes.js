const { set } = require('express/lib/application');
const setVariables = require('./middlewares/setVariables');

require('./middlewares/setVariables')
module.exports = function (app) {
  app.get("/", function (req, res, next) {
    res.redirect("/bed");
  });
  app.get("/bed", setVariables, function (req, res, next) {
    res.render("bed/index", res.variables);
  });

  app.get("/bed/:id",setVariables, function (req, res, next) {
    res.render("bed/detail", res.variables);
  });

  app.get("/user", setVariables ,function (req, res, next) {
    res.render("user/index", res.variables);
  });

  app.get("/user/:id", setVariables ,function (req, res, next) {
    res.render("user/detail", res.variables);
  });

  app.get("/reservation", setVariables,function (req, res, next) {
    res.render("reservation/index", res.variables);
  });

  app.get("/reservation/:id",setVariables, function (req, res, next) {
    res.render("reservation/detail", res.variables);
  });
};
