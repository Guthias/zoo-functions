const { employees, species } = require('../data/zoo_data');

function findWorker(id) {
  return employees.find((employee) => employee.id === id
    || employee.firstName === id
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

const employeeInfo = ({ id, firstName, lastName, responsibleFor }) => ({
  id,
  fullName: `${firstName} ${lastName}`,
  species: getSpecies(responsibleFor),
  locations: getLocation(responsibleFor) });

function getEmployeesCoverage(employeID = null) {
  if (!employeID) {
    return employees.reduce((acc, employee) => {
      acc.push(employeeInfo(employee));
      return acc;
    }, []);
  }

  const worker = findWorker(employeID[Object.keys(employeID)[0]]);
  if (!worker) throw new Error('Informações inválidas');
  return employeeInfo(worker);
}

module.exports = getEmployeesCoverage;
