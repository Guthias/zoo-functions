const data = require('../data/zoo_data');

function countAllAnimals() {
  const animalCount = {};

  data.species.forEach((specie) => {
    animalCount[specie.name] = specie.residents.length;
  });

  return animalCount;
}

function countAnimals(animal) {
  if (!animal) return countAllAnimals();

  const animalFromSpecie = data.species.find((specie) => specie.name === animal.specie).residents;
  if (Object.keys(animal).length === 2) {
    return animalFromSpecie.filter((resident) => resident.sex === animal.sex).length;
  }
  return animalFromSpecie.length;
}

module.exports = countAnimals;
