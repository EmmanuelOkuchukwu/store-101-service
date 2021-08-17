const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        maxLength: 150
    },
    stockLevel: {
        type: Number,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
        maxLength: 150
    }
});

mongoose.model('stock', stockSchema);
