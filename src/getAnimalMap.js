const { species } = require('../data/zoo_data');

const allAnimals = () => {
  const animalMap = { NE: [], NW: [], SE: [], SW: [] };

  species.forEach((specie) => {
    animalMap[specie.location].push(specie.name);
  });

  return animalMap;
};

function filterBySex(sex, specie) {
  return specie.residents.reduce((acumulator, resident) => {
    if (resident.sex === sex) {
      acumulator.push(resident.name);
    }
    return acumulator;
  }, []);
}

const animalsIncludeNames = (sex = undefined, sorted = false) => {
  const animalMap = { NE: [], NW: [], SE: [], SW: [] };

  let animalNames;
  species.forEach((specie) => {
    animalNames = [];

    if (sex) {
      animalNames = filterBySex(sex, specie);
    } else {
      specie.residents.forEach((resident) => animalNames.push(resident.name));
    }

    if (sorted) animalNames = animalNames.sort();
    animalMap[specie.location].push({ [specie.name]: animalNames });
  });

  return animalMap;
};

function getAnimalMap(options = {}) {
  if (options.includeNames) {
    if (options.sex) return animalsIncludeNames(options.sex, options.sorted);
    if (options.sorted) return animalsIncludeNames(options.sex, options.sorted);
    return animalsIncludeNames();
  }
  return allAnimals();
}

module.exports = getAnimalMap;
