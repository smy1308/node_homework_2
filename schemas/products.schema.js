const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String
    },
    author: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["FOR_SALE", "SOLD_OUT"],
        default: "FOR_SALE"        
    },    
},
    { timestamps: true }
);

module.exports = mongoose.model('Products', productsSchema);