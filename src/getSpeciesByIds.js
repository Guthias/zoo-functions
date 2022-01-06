const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  const species = [];
  species.push(data.species.find((specie) => specie.id === ids));
  return species;
}

module.exports = getSpeciesByIds;
