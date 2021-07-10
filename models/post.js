const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
   
    _id: {
        type: String,
        default: Math.random()
    },
    name: {
        type: String,
        // trim: true,
        // required: 'Enter an item name'
    },
    description: {
        type: String,
        // trim: true,
    },
    location: {
        type: String,
        // trim: true,
        // required: 'Enter a location'
    },
    quantity: {
        type: Number,
        // required: 'Enter a quantity'
    },
    postDate: {
        type: String,
        default: new Date().toLocaleDateString() + ', ' + new Date().toLocaleTimeString()
    },
    user_id: {
        type: String
    }
        
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;