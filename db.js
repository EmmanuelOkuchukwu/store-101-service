const mongoose = require('mongoose');
const { DB_URI } = require('./dbUri');

mongoose.connect(DB_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
})

.then(() => {
    console.log('Connected to mongodb!');
})

.catch((error) => {
    console.log(error);
})
