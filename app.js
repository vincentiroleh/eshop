const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();

const api = require('./config/env').API_URL;

app.use(cors());
app.options('*', cors());

require('./config/mongoose'); // db connection

// middleware
app.use(express.json()); // bodyParser
app.use(logger('dev')); // morgan logger
app.use(`${api}`, require('./components')); // routers


module.exports = app;
