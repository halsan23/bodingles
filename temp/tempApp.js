// Functions

// let randNum = getRandomNum => Math.floor(Math.random() * 6) + 1;

const user = {
   firstName: 'Harvey',
   lastName: 'Wallbanger',
   password: '47F78djxdh$x',
   email: 'harvy@email.com',
   birthdate: '2000',
   city: 'Somewhere',
   state: 'Texas'
}

const {firstName, lastName, email, birthdate: bday} = user;

console.log(firstName);
console.log(lastName);
console.log(email);
console.log(bday);