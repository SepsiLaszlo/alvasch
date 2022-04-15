const Schema = require('mongoose').Schema;
const db = require('../db/config');

const Bed = db.model('Reservation', {
    start: String,
    end: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    bed: {
        type: Schema.Types.ObjectId,
        ref: 'Bed'
    }
});

module.exports = Bed;