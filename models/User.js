const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
   
    _id: {
        type: String,
        default: Math.random()
    },
    firstName: {
        type: String,
        // trim: true,
        // required: 'Enter a first name'
    },
    lastName: {
        type: String,
        // trim: true,
        // required: 'Enter a last name'
    },
    username: {
        type: String,
        // trim: true,
        // required: 'Enter a password'
    },
    password: {
        type: String,
        // trim: true,
        // required: 'Enter a password'
    },
    email: {
        type: String,
        // trim: true,
        // required: 'Enter a email address'
    }
        
});

const User = mongoose.model('User', userSchema);

module.exports = User;