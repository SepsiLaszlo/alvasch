// It retuns a reservation from the database
const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  const Reservation = requireOption(objectrepository, "Reservation");
  
  return async function (req, res, next) {
    reservation = await Reservation.findById(req.params.id).populate('user').populate('bed')
    res.locals.reservation = reservation
    return next()
  };
};
