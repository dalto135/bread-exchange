const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reservationSchema = new Schema({

    _id: {
        type: String,
        default: Math.random()
    },
    quantity: {
        type: Number,
        // required: 'Enter a quantity'
    },
    reservationDate: {
        type: String,
        default: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    },
    user_id: {
        type: String
    },
    post_id: {
        type: String
    }
        
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;