const people = require("../country/state/city/index");
const first = require("../utilities/utils/index");
const getPeopleInCity = (people) => {
  return first(people);
};
module.exports = getPeopleInCity;
console.log(getPeopleInCity);
