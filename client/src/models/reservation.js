const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
   
    post_id: {
        type: Number,
    },
    post_user_id: {
        type: Number,
    },
    user_id: {
        type: Number,
    },
    quantity: {
        type: Number,
        required: 'Enter a quantity'
    }
        
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;