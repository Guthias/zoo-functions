const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const ages = {
    child: 0,
    adult: 0,
    senior: 0 };

  entrants.forEach((person) => {
    if (person.age < 18) {
      ages.child += 1;
    } else if (person.age >= 50) {
      ages.senior += 1;
    } else {
      ages.adult += 1;
    }
  });

  return ages;
}

function calculateEntry(entrants = {}) {
  if (Object.keys(entrants).length === 0) return 0;
  const guests = countEntrants(entrants);

  return (guests.child * data.prices.child)
    + (guests.adult * data.prices.adult)
    + (guests.senior * data.prices.senior);
}

console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
