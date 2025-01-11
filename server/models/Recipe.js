const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'This field is Required.'
    },
    description:{
        type: String,
        required: 'This field is Required.'
    },
    email:{
        type: String,
        required: 'This field is Required.'
    },
    ingredients:{
        type: Array,
        required: 'This field is Required.'
    },
    category:{
        type: String,
        enum: ['Thai','American','Chinese','Mexican','Indian'],
        required: 'This is Required.'
    },
    image:{
        type: String,
        required: 'This field is Required.'
    }
});

recipeSchema.index({name: 'text', description: 'text'});
//WildCard indexing
// recipeSchema.index({"$**" : 'text'});


module.exports = mongoose.model('Recipe',recipeSchema);