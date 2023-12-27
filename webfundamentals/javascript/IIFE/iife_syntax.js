// IIFE Syntax
(function () {
  console.log("IIFE ");
})();

// IIFE private scope
(function () {
  var priVar = "Hello World";
  // This line logs "Hello World"
  console.log(priVar);
})();

// This line throws a ReferenceError because priVar is not defined here
console.log(priVar);

// IIFE public scope
(function () {
  var myVar = "Hello private World";
  // This line logs "Hello private World"
  console.log(myVar);
})();

var myVar = "Hello Outside world";

console.log(myVar); // This line logs "Hello Outside world"

// we can assign IIFE to variable
// we define an IIFE that creates a private variable privateVar
let myModule = (function () {
  let privateVar = "Hello module";
  let privateVar2 = "Hello module 2";

  function privateFunc() {
    console.log(privateVar);
  }

  return {
    privateFunc,
    privateVar2,
  };
})();

myModule.privateFunc();
