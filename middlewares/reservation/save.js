// It saves the reservation to the database
const requireOption = require('../requireOption');

 module.exports = function(objectrepository) {
     const Reservation = requireOption(objectrepository, 'Reservation');
 
     return function(req, res, next) {         
        if (
             typeof req.body.start === 'undefined' ||
             typeof req.body.end === 'undefined'
         ) {
             return next();
         }
 
 
         res.locals.reservation.start = req.body.start;
         res.locals.reservation.end = req.body.end;         
 
         res.locals.reservation.save(err => {
             if (err) {
                 return next(err);
             }
 
             return res.redirect(`/reservation/${res.locals.reservation._id}`);
            });
     };
 };