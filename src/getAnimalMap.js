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
const animalsIncludeNames = (sex) => {
  const animalMap = {
    NE: [],
    NW: [],
    SE: [],
    SW: [] };

  let animalNames;
  species.forEach((specie) => {
    animalNames = [];

    specie.residents.forEach((resident) => {
      if (sex) {
        if (resident.sex === sex) {
          animalNames.push(resident.name);
        }
      } else {
          animalNames.push(resident.name);
      }
    });

    animalMap[specie.location].push({ [specie.name]: animalNames });
  });

  return animalMap;
};

function getAnimalMap(options = {}) {
  if (options.includeNames) {
    if (options.sex) {
      return animalsIncludeNames(options.sex);
    }
    return animalsIncludeNames();
  }
  return allAnimals();
}
console.log(getAnimalMap());
module.exports = getAnimalMap;
