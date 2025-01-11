const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'This is Required.'
    },
    image:{
        type: String,
        required: 'This is Required.'
    }
});

module.exports = mongoose.model('Category',categorySchema);