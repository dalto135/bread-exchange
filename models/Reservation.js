const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reservationSchema = new Schema({

    post_id: {
        type: String,
    },
    post_user_id: {
        type: String,
    },
    user_id: {
        type: String,
    },
    quantity: {
        type: Number,
        required: 'Enter a quantity'
    },
    reservationDate: {
        type:Date,
        default:Date.now
    },
        
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;