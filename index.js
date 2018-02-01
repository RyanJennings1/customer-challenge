const fs = require('fs');
const constants = require('./lib/constants');
const calculate = require('./lib/calculations');
const customerUtils = require('./lib/customerUtils');

const filterCustomers = customerUtils.filterCustomers;
const sortCustomers = customerUtils.sortCustomers;

// Return a promise of customer data in an object
function getCustomers() {
  return new Promise((resolve, reject) => {
    fs.readFile('customers.json', 'utf8', (err, data) => {
      if (err) throw err;
      resolve(JSON.parse(data));
    });
  });
}

// Output names and user ids of matching customers
function outputResult(customerData) {
  for (let customer of customerData) {
    console.log(`name: ${customer.name} user_id: ${customer.user_id}`);
  }
}

// Write result to json file
function writeCustomers(customerData) {
  return new Promise((resolve, reject) => {
    fs.writeFile('output.json', JSON.stringify(customerData), 'utf8', (err, data) => {
      if (err) throw err;
      resolve('');
    });
  });
}

// Get customers then write sorted and filtered data to json file
getCustomers().then(data => {
  const matchedCustomers = sortCustomers(filterCustomers(data), 'user_id');

  // Output matched customers
  outputResult(matchedCustomers);
  writeCustomers(matchedCustomers);
});

