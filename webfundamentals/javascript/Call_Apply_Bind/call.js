//

const kevin = {
  name: "Kevin",
  getName: function () {
    return `name is ${this.name}`;
  },
};

const lisa = {
  name: "lisa",
};

console.log(kevin.getName.call(lisa));

// For classes
class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  dance(style = "tango") {
    console.log(`name is ${this.firstName} and style is ${style}`);
  }
}

const blue = new Cat("blue");
blue.dance(); // will log name is blue
let b1 = blue.dance;
// b1();
// When u call a function on nothing and but that functin comes inside a class, the value if this will be undefined not Window

// To over come above problem we use call

b1.call(blue, "ino"); // by using call
