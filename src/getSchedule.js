const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');

const openTime = (open, close) => {
  if (open === 0) return 'CLOSED';
  return `Open from ${open}am until ${close}pm`;
};

const exhibition = (weekDay) => {
  const exhibitionAnimals = data.species.reduce((acumulator, specie) => {
    if (specie.availability.includes(weekDay)) acumulator.push(specie.name);
    return acumulator;
  }, []);

  return (exhibitionAnimals.length) ? exhibitionAnimals : 'The zoo will be closed!';
};

const daySchedule = (weekDay) => {
  const schedule = {};
  schedule[weekDay] = {
    officeHour: openTime(hours[weekDay].open, hours[weekDay].close),
    exhibition: exhibition(weekDay) };
  return schedule;
};

function fullSchedule() {
  const schedule = {};
  Object.keys(hours).forEach((weekDay) => {
    schedule[weekDay] = {
      officeHour: openTime(hours[weekDay].open, hours[weekDay].close),
      exhibition: exhibition(weekDay) };
  });

  return schedule;
}

function getSchedule(scheduleTarget) {
  if (Object.keys(hours).includes(scheduleTarget)) {
    return daySchedule(scheduleTarget);
  }
  const animal = species.find((specie) => specie.name === scheduleTarget);

  if (animal) {
    return animal.availability;
  }

  return fullSchedule();
}

console.log(getSchedule());

module.exports = getSchedule;
