const { species } = require('../data/zoo_data');

const countAllAnimals = () => species
  .reduce((acc, specie) => {
    acc[specie.name] = specie.residents.length;
    return acc;
  }, {});

function countAnimals(animal) {
  if (!animal) return countAllAnimals();
  const animalFromSpecie = species.find((specie) => specie.name === animal.specie).residents;
  return Object.prototype.hasOwnProperty.call(animal, 'sex')
    ? animalFromSpecie.filter((resident) => resident.sex === animal.sex).length
    : animalFromSpecie.length;
}

module.exports = countAnimals;
