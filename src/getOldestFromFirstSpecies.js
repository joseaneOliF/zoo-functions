const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const getFirstSpecie = employees.filter((employee) => employee.id === id)[0].responsibleFor[0];
  const getAnimal = species.filter((specie) => specie.id === getFirstSpecie)[0].residents;
  const getOlderAnimal = getAnimal.sort((a, b) => b.age - a.age);
  return [getOlderAnimal[0].name, getOlderAnimal[0].sex, getOlderAnimal[0].age];
}
module.exports = getOldestFromFirstSpecies;
