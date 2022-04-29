// It saves the reservation to the database
const requireOption = require('../requireOption');

 module.exports = function(objectrepository) {
     const Reservation = requireOption(objectrepository, 'Reservation');
     const Bed = requireOption(objectrepository, 'Bed');
     const User = requireOption(objectrepository, 'User');

 
     return async function(req, res, next) {         
        if (
             typeof req.body.start === 'undefined' ||
             typeof req.body.end === 'undefined'
         ) {
             return next();
         }

         if( typeof res.locals.bed !== undefined) {
             res.locals.reservation = new Reservation();
             bed = await Bed.findById(req.body.bed)
             user = await User.findById(req.body.user)


             res.locals.reservation.bed = bed;
             res.locals.reservation.user = user;
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