const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const oldestAnimal = species.find((specie) => specie.id === employees
    .find((employee) => employee.id === id).responsibleFor[0]).residents
    .sort((a, b) => b.age - a.age)[0];

  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
