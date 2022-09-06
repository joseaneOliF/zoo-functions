const data = require('../data/zoo_data');

const { species, employees } = data;

const employeeName = (name) => employees.find((employee) => (employee
  .firstName === name || employee.lastName === name));

const employeeId = (id) => employees.find((employee) => employee.id === id);

const speciesName = (id) => species.find((specie) => specie.id === id).name;

const speciesLocation = (id) => species.find((specie) => specie.id === id).location;

const speciesEmployeesName = (employee) => employee.responsibleFor.map((id) => speciesName(id));

const speciesEmployeesLocation = (employee) => employee.responsibleFor
  .map((id) => speciesLocation(id));

const getfullName = (employee) => `${employee.firstName} ${employee.lastName}`;

const employeeFn = (obj) => {
  if (obj.id) {
    return employeeId(obj.id);
  }
  return employeeName(obj.name);
};

const allEmployees = () => employees.map((employee) => ({
  id: employee.id,
  fullName: getfullName(employee),
  species: speciesEmployeesName(employee),
  locations: speciesEmployeesLocation(employee),
}));

function getEmployeesCoverage(obj) {
  if (!obj) {
    return allEmployees();
  }
  const employee = employeeFn(obj);
  console.log(employee);
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  }
  return {
    id: employee.id,
    fullName: getfullName(employee),
    species: speciesEmployeesName(employee),
    locations: speciesEmployeesLocation(employee),
  };
}
console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
