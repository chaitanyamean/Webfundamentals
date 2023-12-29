function guessingGame() {
  let number = Math.floor(Math.random() * 100);
  let turns = 0;
  let isGameDone = false;
  return function (b) {
    if (isGameDone) return "The game is over, you already won!";
    turns++;
    if (b == number) {
      isGameDone = true;
      const guess = turns === 1 ? "guess" : "guesses";
      return `You win! You found ${number} in ${turns} ${guess}.`;
    }

    if (b < number) {
      return `${b} is too low!`;
    }

    if (b > number) {
      return `${b} is too high!`;
    }
  };
}

//Problem 2 Counter function with multiple instances
function counter() {
  let count = 0;
  // This is the inner function that increments and logs the private variable
  function innerFunc() {
    // arr.push(++count)
    return ++count; // Holds the reference of count even if the context is lost
  }

  return innerFunc;
}

let firstCounter = counter();
let firstArray = [];
firstArray.push(firstCounter());
firstArray.push(firstCounter());
firstArray.push(firstCounter());
firstArray.push(firstCounter());
firstArray.push(firstCounter());
console.log(firstArray);

let secondCounter = counter();
let secondArray = [];
secondArray.push(secondCounter());
secondArray.push(secondCounter());
secondArray.push(secondCounter());
console.log(secondArray);
