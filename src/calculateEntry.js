const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => entrants.reduce((acc, person) => {
  if (person.age < 18) acc.child += 1;
  else if (person.age >= 50) acc.senior += 1;
  else acc.adult += 1;
  return acc;
}, { child: 0, adult: 0, senior: 0 });

function calculateEntry(entrants = {}) {
  if (Object.keys(entrants).length === 0) return 0;
  const guests = countEntrants(entrants);

  return (guests.child * prices.child)
    + (guests.adult * prices.adult)
    + (guests.senior * prices.senior);
}

module.exports = { calculateEntry, countEntrants };
