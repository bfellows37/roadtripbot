const bodyparser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv-safe');
const routes = require('./routes');

dotenv.config();

const app = express();

app.use(bodyparser.json());

app.use('/',routes);

module.exports = exports = app;
