// It returns all the beds from the database
const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  const Bed = requireOption(objectrepository, "Bed");
  
  return async function (req, res, next) {

    bed = await Bed.findById(req.params.id).populate('user')
    res.locals.bed = bed
    return next()
  };
};
