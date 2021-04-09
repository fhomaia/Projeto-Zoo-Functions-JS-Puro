/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  const animalsArray = [];
  ids.forEach((id) => {
    animalsArray.push(data.animals.find((animal) => animal.id === id));
  });
  return animalsArray;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const targetAnimal = data.animals.find((animalArray) => animalArray.name === animal);
  return targetAnimal.residents.every((resident) => resident.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const employeeData = data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return employeeData === undefined ? {} : employeeData;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.find((idCode) => idCode === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species = 'all') {
  // seu código aqui
  const allAnimals = data.animals.reduce((a, b) => ({
    ...a,
    [b.name]: b.residents.length,
  }), {});
  return species === 'all' ? allAnimals
    : data.animals.find((animal) => animal.name === species).residents.length;
}

function entryCalculator(entrants = undefined) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * 49.99 + Senior * 24.99 + Child * 20.99;
}

function animalMap(options = 'empty') {
  // seu código aqui
  const animalsNe = data.animals.filter((animal) => animal.location === 'NE');
  const animalsNw = data.animals.filter((animal) => animal.location === 'NW');
  const animalsSe = data.animals.filter((animal) => animal.location === 'SE');
  const animalsSw = data.animals.filter((animal) => animal.location === 'SW');
  if (options === 'empty' || options.includeNames !== true) {
    return {
      NE: animalsNe.map((animal) => animal.name),
      NW: animalsNw.map((animal) => animal.name),
      SE: animalsSe.map((animal) => animal.name),
      SW: animalsSw.map((animal) => animal.name),
    };
  }
  if (options.includeNames === true && options.sex === 'female' && options.sorted === true) {
    return {
      NE: animalsNe.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
        resident.sex === 'female').map((resident) => resident.name).sort() })),
      NW: animalsNw.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
        resident.sex === 'female').map((resident) => resident.name).sort() })),
      SE: animalsSe.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
        resident.sex === 'female').map((resident) => resident.name).sort() })),
      SW: animalsSw.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
        resident.sex === 'female').map((resident) => resident.name).sort() })),
    };
  }
  if (options.includeNames === true && options.sex === 'male' && options.sorted === true) {
    return {
      NE: animalsNe.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
        resident.sex === 'male').map((resident) => resident.name).sort() })),
      NW: animalsNw.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
        resident.sex === 'male').map((resident) => resident.name).sort() })),
      SE: animalsSe.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
        resident.sex === 'male').map((resident) => resident.name).sort() })),
      SW: animalsSw.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
        resident.sex === 'male').map((resident) => resident.name).sort() })),
    };
  }
  if (options.includeNames === true && options.sorted === true) {
    return {
      NE: animalsNe.map((animal) => ({ [animal.name]: animal.residents.map((resident) =>
        resident.name).sort() })),
      NW: animalsNw.map((animal) => ({ [animal.name]: animal.residents.map((resident) =>
        resident.name).sort() })),
      SE: animalsSe.map((animal) => ({ [animal.name]: animal.residents.map((resident) =>
        resident.name).sort() })),
      SW: animalsSw.map((animal) => ({ [animal.name]: animal.residents.map((resident) =>
        resident.name).sort() })),
    };
  }
  if (options.includeNames === true && options.sex === 'female') {
    return {
      NE: animalsNe.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
        resident.sex === 'female').map((resident) => resident.name) })),
      NW: animalsNw.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
        resident.sex === 'female').map((resident) => resident.name) })),
      SE: animalsSe.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
        resident.sex === 'female').map((resident) => resident.name) })),
      SW: animalsSw.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
        resident.sex === 'female').map((resident) => resident.name) })),
    };
  }
  if (options.includeNames === true && options.sex === 'male') {
    return {
      NE: animalsNe.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
        resident.sex === 'male').map((resident) => resident.name) })),
      NW: animalsNw.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
        resident.sex === 'male').map((resident) => resident.name) })),
      SE: animalsSe.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
        resident.sex === 'male').map((resident) => resident.name) })),
      SW: animalsSw.map((animal) => ({ [animal.name]: animal.residents.filter((resident) =>
        resident.sex === 'male').map((resident) => resident.name) })),
    };
  }
  if (options.includeNames === true) {
    return {
      NE: animalsNe.map((animal) =>
        ({ [animal.name]: animal.residents.map((resident) => resident.name) })),
      NW: animalsNw.map((animal) =>
        ({ [animal.name]: animal.residents.map((resident) => resident.name) })),
      SE: animalsSe.map((animal) =>
        ({ [animal.name]: animal.residents.map((resident) => resident.name) })),
      SW: animalsSw.map((animal) =>
        ({ [animal.name]: animal.residents.map((resident) => resident.name) })),
    };
  }
}
// console.log(animalMap({includeNames :true}))

// function schedule(dayName) {
//   // seu código aqui
// }

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  // schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
