// It saves a bed to the database

/**
 * Using POST params update or save a befott to the database
 * If res.locals.befott is there, it's an update otherwise this middleware creates an entity
 * Redirects to /befott/:nagymamaid after success
 */
 const requireOption = require('../requireOption');

 module.exports = function(objectrepository) {
     const Bed = requireOption(objectrepository, 'Bed');
 
     return function(req, res, next) {
         console.log('bed save')
         
        if (
             typeof req.body.room === 'undefined' ||
             typeof req.body.position === 'undefined'||
             typeof req.body.owner === 'undefined'
         ) {
             return next();
         }
 
 
         if (Number.isNaN(parseInt(req.body.room, 10))) {
             return next(new Error('A szobaszámak számnak kell lennie! (bruh)'));
         }
 
         res.locals.bed.room = req.body.room;
         res.locals.bed.position = req.body.position; 
         res.locals.bed.user.name = req.body.owner;
        
 
         res.locals.bed.save(err => {
             if (err) {
                 return next(err);
             }

             res.locals.bed.user.save(err => {
                if (err) {
                    return next(err);
                }
 
             return res.redirect(`/bed/${res.locals.bed._id}`);
            });
         });
     };
 };