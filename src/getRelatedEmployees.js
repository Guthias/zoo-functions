const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some((employee) => employee.managers
  .some((manager) => manager === id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.reduce((acc, person) => {
    if (person.managers.includes(managerId)) acc.push(`${person.firstName} ${person.lastName}`);
    return acc;
  }, []);
};

module.exports = { isManager, getRelatedEmployees };
