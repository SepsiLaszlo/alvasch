// It deletes a reservation from the database

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.reservation === 'undefined') {
            return next();
        }

        res.locals.reservation.remove(err => {
            if (err) {
                return next(err);
            }
           
               return next();
            })
    };
};