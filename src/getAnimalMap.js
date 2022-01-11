const { species } = require('../data/zoo_data');

const allAnimals = () => species.reduce((acc, specie) => {
  acc[specie.location].push(specie.name);
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const filterBySex = (sex, specie) => specie.residents.reduce((acc, resident) => {
  if (resident.sex === sex) acc.push(resident.name);
  return acc;
}, []);

const animalsIncludeNames = (sex = undefined, sorted = false) => species.reduce((acc, specie) => {
  let animalNames = (sex) ? filterBySex(sex, specie) : specie.residents.map(({ name }) => name);
  if (sorted) animalNames = animalNames.sort();
  acc[specie.location].push({ [specie.name]: animalNames });
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

function getAnimalMap(options = {}) {
  return options.includeNames
    ? animalsIncludeNames(options.sex, options.sorted)
    : allAnimals();
}

module.exports = getAnimalMap;
