const { species } = require('../data/zoo_data');

const allAnimals = () => {
  const animalMap = {
    NE: [],
    NW: [],
    SE: [],
    SW: [] };

  species.forEach((specie) => {
    animalMap[specie.location].push(specie.name);
  });

  return animalMap;
};

function getAnimalMap(options) {
  return allAnimals();
}

module.exports = getAnimalMap;
