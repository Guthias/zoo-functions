const { employees } = require('../data/zoo_data');

function findWorker(id) {
  return employees.find((employee) => employee.id === id
    || employee.name === id
    || employee.lastName === id);
}

function getEmployeesCoverage(employeID) {
  return findWorker(employeID[Object.keys(employeID)[0]]);
}

console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;
