// Extends & Super keywords Demo
// ======================================

// cat Class
class Cat {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   // simple methods
   eat() {
      return `${this.name} is eating.`;
   }
   meow() {
      return `Meeooowww, purr, purr,`
   }
}

// dog Class
class Dog {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   // simple methods
   eat() {
      return `${this.name} is eating.`;
   }
   woof() {
      return `Woof, Woof, BARK`
   }
}

// use the class
const myCat = new Cat('Jitters', 2);

// call the cat method
console.log(myCat.eat());
console.log(myCat.meow());