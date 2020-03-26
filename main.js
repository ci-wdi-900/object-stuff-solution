const getFirstName = function(person) {
  return person.firstName;
}

const getLastName = function(person) {
  return person.lastName;
}

const getFullName = function(person) {
  return `${person.firstName} ${person.lastName}`
}

const setFirstName = function(person, name) {
  person.firstName = name;
}

const setAge = function(person, age) {
  person.age = age;
}

const giveBirthday = function(person) {
  if (age in person) {
    person.age++;
  } else {
    person.age = 1;
  }
}

const marry = function(person1, person2) {
  person1.married = true;
  person2.married = true;

  person1.spouseName = getFullName(person2);
  person2.spouseName = getFullName(person1);
}

const divorce = function(person1, person2) {
  person1.married = false;
  person2.married = false;

  delete person1.spouseName
  delete person2.spouseName
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
} 
