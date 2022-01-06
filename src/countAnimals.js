const data = require('../data/zoo_data');

function countAllAnimals() {
  const animalCount = {};

  data.species.forEach((specie) => {
    animalCount[specie.name] = specie.residents.length;
  });
}

function countAnimals(animal) {
  if (!animal) return countAllAnimals();
}

console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
