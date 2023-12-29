function counter() {
  let count = 0;

  // This is the inner function that increments and logs the private variable
  function innerFunc() {
    return ++count; // Holds the reference of count even if the context is lost
  }

  return innerFunc;
}

let countIncrement = counter();

//closure in settimeout
let message = "Hello world";
setTimeout(() => {
  console.log(message);
}, 1000);

//Closures with loops with VAR and IIFE
for (var i = 1; i < 6; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 1000 * j);
  })(i);
}

// with let
for (let i = 0; i < 6; i++) {
  setTimeout(() => {
    console.log("let", i);
  }, 1000 * i);
}

//Partial Applications
function outer1(a) {
  return function (b) {
    return a * b;
  };
}

// partial application with multiple ()
let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
};

console.log(sum(1)(2)(4)());
