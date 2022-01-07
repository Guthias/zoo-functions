const data = require('../data/zoo_data');

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

function fullSchedule() {
  const schedule = {};
  Object.keys(data.hours).forEach((weekDay) => {
    schedule[weekDay] = {
      officeHour: openTime(weekDay.open, weekDay.close),
      exhibition: exhibition(weekDay) };
  });

  return schedule;
}

function getSchedule(scheduleTarget) {
  return fullSchedule();
}

console.log(getSchedule());

module.exports = getSchedule;
