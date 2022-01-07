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

// eslint-disable-next-line max-lines-per-function
const animalsIncludeNames = () => {
  const animalMap = {
    NE: [],
    NW: [],
    SE: [],
    SW: [] };

  let animalNames;
  species.forEach((specie) => {
    animalNames = [];

    specie.residents.forEach((resident) => {
      animalNames.push(resident.name);
    });

    animalMap[specie.location].push({ [specie.name]: animalNames });
  });

  return animalMap;
};

function getAnimalMap(options) {
  return animalsIncludeNames();
  // return allAnimals();
}
console.log(getAnimalMap());
module.exports = getAnimalMap;
