const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/roadtrip', {useMongoClient: true});

const expect = require('chai').expect;

const fs = require('fs');

const Location = require('../../data/models/Location');

const locationsOfInterest = require('./locationsOfInterest');

before((done) => {
  mongoose.connect('mongodb://localhost:27017/roadtrip', {useMongoClient: true});
  done();
});

after((done) => {
  mongoose.disconnect();
  done();
  process.exit(0);
});

describe('locationsOfInterest', () => {
  it('should get locations near a point within a range of distances', (done) => {

    const metersPerMile = 1609.34;
    const testMeanderModifier = 0.8;

    const testMiles = 200;

    const testMargin = 100 * metersPerMile;
    const testMeters = testMiles * metersPerMile * testMeanderModifier;

    const minDistance = (testMeters - testMargin) > 0 ? (testMeters - testMargin):0;
    const maxDistance = testMeters+testMargin;

    const testGeoJson = {type: 'Point', coordinates: [-119.72979479999998, 37.6875204]};
    locationsOfInterest(testGeoJson,minDistance,maxDistance,(error, results) => {
      for(let result of results) {
        if(result.dis !== 0) {
          expect(result.dis).to.be.within(minDistance,maxDistance);
        }
      }
      done(error);
    });
  });
});

