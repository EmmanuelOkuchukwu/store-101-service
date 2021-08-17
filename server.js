const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 5000;

require('./db');

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Store-101 api!' });
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./model/users');

app.use(express.json())

app.use(require('./routes/users.route'));

let corsOption = {
    origin: 'http://localhost:3000/'
}

app.use(cors(corsOption))

app.listen(PORT, () => {
    console.log(`Calling Port ${PORT}`);
})
