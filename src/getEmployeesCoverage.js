const { employees, species } = require('../data/zoo_data');

function findWorker(id) {
  return employees.find((employee) => employee.id === id
    || employee.name === id
    || employee.lastName === id);
}

const getSpecies = (specieIDs) => specieIDs.reduce((acc, specieID) => {
  acc.push(species.find((animal) => animal.id === specieID).name);
  return acc;
}, []);

const getLocation = (specieIDs) => specieIDs.reduce((acc, specieID) => {
  acc.push(species.find((animal) => animal.id === specieID).location);
  return acc;
}, []);

function getEmployeesCoverage(employeID) {
  const worker = findWorker(employeID[Object.keys(employeID)[0]]);

  return {
    id: worker.id,
    fullName: `${worker.firstName} ${worker.lastName}`,
    species: getSpecies(worker.responsibleFor),
    locations: getLocation(worker.responsibleFor) };
}

// console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;
