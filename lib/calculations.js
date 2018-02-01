const constants = require('./constants');

// Convert degrees to radians
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function calcDistance(lat1, lon1, lat2, lon2) {
 const rlat1 = toRadians(lat1);
 const rlat2 = toRadians(lat2);                                                                      

 const rlon1 = toRadians(lon1);
 const rlon2 = toRadians(lon2);

 // The difference between the values
 const deltaLat = rlat2 - rlat1;
 const deltaLon = rlon2 - rlon1;

 // Haversine formula
 // https://en.wikipedia.org/wiki/Great-circle_distance
 let a = Math.pow(Math.sin(deltaLat/2), 2)
         + Math.cos(rlat1) * Math.cos(rlat2) * Math.pow(Math.sin(deltaLon/2), 2);

 let c = 2 * Math.asin(Math.sqrt(a));

 return constants.earthRadius * c;
}

// Calculate the distance from Dublin office
function distanceFromOffice(lat, lon) {
  return calcDistance(constants.officeLat, constants.officeLon, lat, lon);
}

// Return whether distance is less than or equal to search distance
function isInDistance(distance, distanceToCheck) {
  return distanceToCheck <= distance;
}

module.exports.toRadians = toRadians;
module.exports.calcDistance = calcDistance;
module.exports.distanceFromOffice = distanceFromOffice;
module.exports.isInDistance= isInDistance;
