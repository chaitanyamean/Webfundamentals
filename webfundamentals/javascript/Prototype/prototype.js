// with new keyword
/**
 *
 * With new keyword
 * 1) Create a new object
 * 2) sets the keyword this to be that object
 * 3) return the object - return this
 * 4) create a link to the object prototype
 */

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    return `${this.name} is barking`;
  }
}

function DogFunc(name, breed) {
  this.name = name;
  this.breed = breed;
}

DogFunc.prototype.bark = function () {
  // DogFunc.__proto__
  return `${this.name} is barking`;
};

let docf = new DogFunc("dogf", "ala");

// Object.getPrototypeOf(obj) and __proto__ give the same result
// JSFacts
