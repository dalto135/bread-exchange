const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
   
    name: {
        type: String,
        trim: true,
        required: 'Enter an item name'
    },
    description: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
        required: 'Enter a location'
    },
    quantity: {
        type: Number,
        required: 'Enter a quantity'
    },
    postDate: {
        type:Date,
        default:Date.now
    },
        
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;