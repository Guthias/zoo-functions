const { species } = require('../data/zoo_data');

const allAnimals = () => species.reduce((acc, specie) => {
  acc[specie.location].push(specie.name);
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const filterBySex = (sex, specie) => specie.residents.reduce((acc, resident) => {
  if (resident.sex === sex) acc.push(resident.name);
  return acc;
}, []);

const animalsIncludeNames = (sex = undefined, sorted = false) => {
  const animalMap = { NE: [], NW: [], SE: [], SW: [] };

  let animalNames;
  species.forEach((specie) => {
    if (sex) {
      animalNames = filterBySex(sex, specie);
    } else {
      animalNames = specie.residents.map(({ name }) => name);
    }

    if (sorted) animalNames = animalNames.sort();
    animalMap[specie.location].push({ [specie.name]: animalNames });
  });

  return animalMap;
};

function getAnimalMap(options = {}) {
  return options.includeNames
    ? animalsIncludeNames(options.sex, options.sorted)
    : allAnimals();
}

module.exports = getAnimalMap;
