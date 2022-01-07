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

const animalsIncludeNames = () => {
  const animalMap = {
    NE: [],
    NW: [],
    SE: [],
    SW: [] };

  species.forEach((animal) => {
    animalMap[animal.location].push({ [animal.name]: [] });
  });

  return animalMap;
};

function getAnimalMap(options) {
  return animalsIncludeNames();
  // return allAnimals();
}
console.log(getAnimalMap());
module.exports = getAnimalMap;
