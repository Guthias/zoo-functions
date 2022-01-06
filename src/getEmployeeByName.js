const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employer = data.employees.find((person) => person.firstName === employeeName
    || person.lastName === employeeName);

  if (!employer) return {};
  return employer;
}

module.exports = getEmployeeByName;
