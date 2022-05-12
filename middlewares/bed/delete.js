// It deletes a bed from the database

 const requireOption = require('../requireOption');

 module.exports = function(objectrepository) {
    const Reservation = requireOption(objectrepository, 'Reservation');
    
    return function(req, res, next) {
         if (typeof res.locals.bed === 'undefined') {
             return next();
         }
 
         res.locals.bed.remove(err => {
             if (err) {
                 return next(err);
             }
             Reservation.deleteMany({ bed: res.locals.bed},err => {
                if (err) {
                    return next(err);
                }
                return next();
            });
             
         });
     };
 };