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

const fullSchedule = () => Object.keys(hours).reduce((acc, weekDay) =>
  Object.assign(acc, daySchedule(weekDay)), {});

function getSchedule(scheduleTarget) {
  const animal = species.find((specie) => specie.name === scheduleTarget);
  if (animal) return animal.availability;
  if (Object.keys(hours).includes(scheduleTarget)) return daySchedule(scheduleTarget);
  return fullSchedule();
}

module.exports = getSchedule;
