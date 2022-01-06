const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animalCount = {};

  data.species.forEach((specie) => {
    animalCount[specie.name] = specie.residents.length;
  });

  return animalCount;
}

countAnimals({ specie: 'giraffes', sex: 'female' });

module.exports = countAnimals;
