const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

getAnimalsOlderThan('otters', 7);
module.exports = getAnimalsOlderThan;
