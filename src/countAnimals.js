const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animalCount = {};

  data.species.forEach((specie) => {
    animalCount[specie.name] = specie.residents.length;
  });

  if (!animal) return animalCount;
  if (animal.specie) return animalCount[animal.specie];
}

countAnimals({ specie: 'giraffes', sex: 'female' });

module.exports = countAnimals;
