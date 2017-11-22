const mongoose = require('mongoose');


const removeMongoId = (doc,ret) => {
  delete ret._id;
};

const geoSchema = mongoose.Schema({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: [Number]
}, {
  toObject: {
    transform: removeMongoId
  },
  toJSON: {
    transform: removeMongoId
  }
});

const locationSchema = mongoose.Schema({
  osm_id: Number,
  osm_version: Number,
  created: Date,
  tags: String,
  type: String,
  name: String,
  gps: geoSchema
});

locationSchema.index({gps: '2dsphere'});

module.exports = exports = locationSchema;
