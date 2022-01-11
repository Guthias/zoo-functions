const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const employer = employees.find((person) => person.firstName === employeeName
    || person.lastName === employeeName);

  return (!employer) ? {} : employer;
};

module.exports = getEmployeeByName;
