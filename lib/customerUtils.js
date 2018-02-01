const calculate = require('./calculations');
const constants = require('./constants');

// Distance from office we are looking for, in metres
const distance = constants.distance;

// Return customers within the selected distance
function filterCustomers(customers) {
  return customers.filter(customer => 
      calculate.isInDistance(distance, 
        calculate.distanceFromOffice(customer.latitude, customer.longitude))
  );
}

// Sort by param e.g. 'user_id'
function sortCustomers(customers, param) {
  return customers.sort((a, b) => {
    return a[param] - b[param];
  });
}

module.exports.filterCustomers = filterCustomers;
module.exports.sortCustomers = sortCustomers;
