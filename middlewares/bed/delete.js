// It deletes a bed from the database

 const requireOption = require('../requireOption');

 module.exports = function(objectrepository) {
     return function(req, res, next) {
         if (typeof res.locals.bed === 'undefined') {
             return next();
         }
 
         res.locals.bed.remove(err => {
             if (err) {
                 return next(err);
             }
             res.locals.bed.user.remove(err => {
                if (err) {
                    return next(err);
                }
                return next();
             })
         });
     };
 };