// It retuns all user from the database
// It returns all the beds from the database
const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  const User = requireOption(objectrepository, "User");
  
  return async function (req, res, next) {

    users = await User.find().populate('bed')
    res.locals.users = users
    return next()
  };
};
