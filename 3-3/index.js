require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);

const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error);
})

db.once('connected', () => {
    console.log('Database Connected');
})

const port = process.env.PORT;

const routes = require('./routes/routes');
const app = express();

app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server Started at ${port}`);
})