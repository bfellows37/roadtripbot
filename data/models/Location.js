const mongoose = require('mongoose');
const schema = require('./schema/locationSchema');

const Location = mongoose.model('location',schema);

module.exports = exports = Location;
