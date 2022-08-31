const data = require('../data/zoo_data');

function countAnimals(animal) {
  let obj = {};
  if (!animal) {
    const speciesName = data.species.map((element) => element.name);
    const residentsQuant = data.species.map((element) => element.residents.length);
    for (let index = 0; index < speciesName.length; index += 1) {
      obj[speciesName[index]] = residentsQuant[index];
    }
  } else if (!animal.sex) {
    const speciesSex = data.species.filter((element) => element.name === animal.specie);
    const number = speciesSex[0].residents.length;
    obj = number;
  } else {
    const species2 = data.species.filter((element) => element.name === animal.specie);
    const number = species2[0].residents.filter((el) => el.sex === animal.sex).length; obj = number;
  }
  return obj;
}
countAnimals();
module.exports = countAnimals;
