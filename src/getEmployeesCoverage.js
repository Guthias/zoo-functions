const { employees } = require('../data/zoo_data');

function findWorker(id) {
  return employees.find((employee) => employee.id === id
    || employee.name === id
    || employee.lastName === id);
}

const getSpecies = () => {

};

const getLocation = () => {

};

function getEmployeesCoverage(employeID) {
  const worker = findWorker(employeID[Object.keys(employeID)[0]]);

  return {
    id: worker.id,
    name: `${worker.firstName} ${worker.lastName}`,
    species: getSpecies(),
    location: getLocation() };
}

console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;
