const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  const { species } = data;
  return species.filter((specie) => ids.includes(specie.id));
}
getSpeciesByIds();
module.exports = getSpeciesByIds;
