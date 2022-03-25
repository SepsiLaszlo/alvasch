module.exports = function (app) {
  app.get("/", function (req, res, next) {
    res.redirect("/bed");
  });
  app.get("/bed", function (req, res, next) {
    const resource = req.path.split("/")[1]
    res.render("bed", {});
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
