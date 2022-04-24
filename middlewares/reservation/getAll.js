// It returns all the reservations from the database
const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  const Reservation = requireOption(objectrepository, "Reservation");
  
  return async function (req, res, next) {
    reservations = await Reservation.find().populate('user').populate('bed')
    res.locals.reservations = reservations
    return next()
  };
};
