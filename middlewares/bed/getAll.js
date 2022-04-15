// It returns all the beds from the database
const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  const Bed = requireOption(objectrepository, "Bed");
  
  return async function (req, res, next) {

    beds = await Bed.find().populate('user')
    res.locals.beds = beds
    return next()
  };
};
