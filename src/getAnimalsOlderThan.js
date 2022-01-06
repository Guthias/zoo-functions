const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((specie) => specie.name === animal);

  return animals.residents.every((specie) => specie.age > age);
}

module.exports = getAnimalsOlderThan;
