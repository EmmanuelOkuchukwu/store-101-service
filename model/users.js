const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 100
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 100
    },
    storeBranch: {
        type: String,
        required: true,
        maxlength: 100
    },
    occupation: {
        type: String,
        required: true,
        maxlength: 100
    },
    dob: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model('users', usersSchema);
