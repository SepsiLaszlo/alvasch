// It saves a bed to the database

/**
 * Using POST params update or save a befott to the database
 * If res.locals.befott is there, it's an update otherwise this middleware creates an entity
 * Redirects to /befott/:nagymamaid after success
 */
 const User = require('../../models/user');
const requireOption = require('../requireOption');

 module.exports = function(objectrepository) {
     const Bed = requireOption(objectrepository, 'Bed');
 
     return async function(req, res, next) {
        if (
             typeof req.body.room === 'undefined' ||
             typeof req.body.position === 'undefined'
         ) {
             return next();
         }
 
         res.locals.bed.room = req.body.room;
         res.locals.bed.position = req.body.position; 
         if (typeof req.body.user !== 'undefined'){
            res.locals.bed.user = await User.findById(req.body.user)
         }

        
 
         res.locals.bed.save(err => {
             if (err) {
                 return next(err);
             }

             return res.redirect(`/bed/${res.locals.bed._id}`);
         });
     };
 };