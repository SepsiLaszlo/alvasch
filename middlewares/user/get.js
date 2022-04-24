// It returns a user from the database
const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  const User = requireOption(objectrepository, "User");
  
  return async function (req, res, next) {

    user = await User.findById(req.params.id).populate('bed')
    res.locals.user = user
    return next()
  };
};
