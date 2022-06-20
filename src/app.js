const express = require('express');
const app = express();
const morgan = require('morgan'); //ver peticiones del servidor
const cors = require('cors'); //para comunicar servidor con otros

app.use(morgan('dev'));
app.use(cors());

app.use(require('./routes/users'));


module.exports = app;


