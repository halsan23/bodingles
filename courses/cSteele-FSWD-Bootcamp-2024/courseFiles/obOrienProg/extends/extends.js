// Extends & Super keywords Demo
// ======================================

// create the Parent Constructor Class
class Pets {
   constructor(name) {
      this.name = name;
   }
   eat() {
      return `${this.name} is eating.`;
   }
}

// cat Class
class Cat extends Pets {
   // meow method
   meow() {
      return `${this.name} says Meeooowww, purr, purr`;
   }
}

// dog Class
class Dog extends Pets {
   // bark method
   bark() {
      return `${this.name} says Woof, Woof, BARK, BARK`;
   }
}



// use the class's
const myDog = new Dog('Chico');
const myCat = new Cat('Jitters');

// call the dog method
console.log(myDog.eat());
console.log(myDog.bark());

// call the cat method
console.log(myCat.eat());
console.log(myCat.meow());