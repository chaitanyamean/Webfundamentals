// count

function counter() {
  let count = 0;

  // This is the inner function that increments and logs the private variable
  function innerFunc() {
    return ++count; // Holds the reference of count even if the context is lost
  }

  return innerFunc;
}

let countIncrement = counter();
console.log(countIncrement()); //1
console.log(countIncrement());
console.log(countIncrement());
console.log(countIncrement());
console.log(countIncrement());
