const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((person) => person.managers.some((manager) => manager === id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const related = [];

  data.employees.forEach((person) => {
    if (person.managers.includes(managerId)) related.push(`${person.firstName} ${person.lastName}`);
  });

  return related;
}

module.exports = { isManager, getRelatedEmployees };
