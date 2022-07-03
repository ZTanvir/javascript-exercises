const findTheOldest = function (people) {
    oldestPerson = "";
    age = 0;

    for (let i = 0; i < people.length; i++) {
        personAge = people[i].yearOfDeath - people[i].yearOfBirth;
        if (typeof personAge != "Number") {
            let timeNow = new Date();
            let timeYear = timeNow.getFullYear();
            personAge = timeYear - people[i].yearOfBirth;
        }
        if (personAge > age) {
            oldestPerson = people[i].name;
            age = personAge;
        }
    }
    for (let i = 0; i < people.length; i++) {
        if (people[i].name != oldestPerson) {
            people.splice(i, 1);
        }
    }
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
