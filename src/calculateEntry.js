const data = require('../data/zoo_data');

const { prices } = data;

// const visitors = [
// {name: 'Lara Carvalho', age: 5},
// {name: 'Frederico Moreira', age: 5},
// {name: 'Pedro Henrique Carvalho', age: 5},
// {name: 'Maria Costa', age: 18},
// {name: 'Núbia Souza', age: 18},
// {name: 'Carlos Nogueira', age: 50},
// ];

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  const result = {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
  return result;
}
function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const valor = countEntrants(entrants);
  const total = valor.child * prices.child + valor.adult * prices.adult
  + valor.senior * prices.senior;
  return total;
}
calculateEntry();

module.exports = { calculateEntry, countEntrants };
