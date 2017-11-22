const Location = require('../../data/models/Location');

/**
 * queries mongo for points near given point
 * @param {object} geoJson a geoJson formatted point
 * @param {float} minDistance minimum distance from point to search
 * @param {float} maxDistance maximum distance from point to search
 * @param {function} callback
 * @return {void}
 */
const locationsOfInterest = (geoJson,minDistance=0,maxDistance=100000000000000,callback) => {

  Location.geoNear(
    geoJson,
    {
      spherical: true,
      num: 1000000,
      minDistance: minDistance,
      maxDistance: maxDistance
    },(error,results) => {
      callback(error,results);
    });
};

module.exports = exports = locationsOfInterest;
