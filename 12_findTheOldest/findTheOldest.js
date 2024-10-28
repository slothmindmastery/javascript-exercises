const findTheOldest = function(people) {
  let birth = 0;
  let death = 0;
  let oldestAge = 0;
  let oldestPerson = null;

  for (person of people) {
    let age = 0;
    birth = person.yearOfBirth;
    if (!person.yearOfDeath) {
      person.yearOfDeath = new Date().getFullYear();
    }
    death = person.yearOfDeath;;
    age = death - birth;
    if (age > oldestAge) {
      oldestAge = age;
      oldestPerson = person;
    }
  }

return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
