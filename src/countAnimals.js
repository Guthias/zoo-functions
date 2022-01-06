const data = require('../data/zoo_data');

function countAllAnimals() {
  const animalCount = {};

  data.species.forEach((specie) => {
    animalCount[specie.name] = specie.residents.length;
  });
}

function countAnimals(animal) {
  if (!animal) return countAllAnimals();

  const animalFromSpecie = data.species.find((specie) => specie.name === animal.specie);
  // if (animal.species && animal.sex) {
  //   return animalFromSpecie.residents.filter((resident) => resident.sex === animal.sex).length;
  // }

  return animalFromSpecie.residents.length;
}

console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
