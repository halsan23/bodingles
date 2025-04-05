// Extends & Super keywords Demo
// ======================================

// create Parent constructor class
class Pets {
   constructor ( name, age ) {
      this.name = name;
      this.age = age;
   }
   // create the age method
   age() {
      return `${this.name} is ${this.age} years old.`;
   }
   // create the eat method
   eat() {
      return `${this.name} is eating.`;
   }
}

// create Dog class
class Dog extends Pets {
   // create the bark method
   bark() {
      return `${this.name} goes Woof, Woof, Bark, Bark.`;
   }
   // create the modified eat method
   eat() {
      return `${this.name} scarf's his food.`;
   }
}

// create Cat class
class Cat extends Pets {
   constructor ( name, age = 2, livesLeft = 9 ) {
      super(name, age);
      this.livesLeft = livesLeft;
   }
   // create the meow method
   meow() {
      return `${this.name} goes Meeooww, purr, purr.`;
   }
   // create the livesLeft method
   lives() {
      return `${this.name} has ${livesLeft} lives left.`;
   }
}


// create the class object's
const myDog = new Dog('Chico', 10);
const myCat = new Cat('Jitters');
// log the dog/cat objects
console.log(myDog);
console.log(myCat);
console.log(' ');

// call the dog methods
console.log(myDog.age());
console.log(myDog.eat());
console.log(myDog.bark());
console.log(' ');

// call the cat methods
console.log(myCat.age);
console.log(myCat.eat());
console.log(myCat.meow());