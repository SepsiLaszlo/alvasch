// It saves the user to the database

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  const User = requireOption(objectrepository, "User");

  return function (req, res, next) {

    if (
      typeof req.body.name === "undefined" ||
      typeof req.body.room === "undefined" 
    ) {
      return next();
    }

    res.locals.user.name = req.body.name;
    res.locals.user.room = req.body.room;

    res.locals.user.save((err) => {
      if (err) {
        return next(err);
      }
        return res.redirect(`/user/${res.locals.user._id}`);
    });
  };
};
