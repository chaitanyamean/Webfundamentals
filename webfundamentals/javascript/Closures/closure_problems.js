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
// console.log(firstArray);

let secondCounter = counter();
let secondArray = [];
secondArray.push(secondCounter());
secondArray.push(secondCounter());
secondArray.push(secondCounter());
// console.log(secondArray);

// closure second prob
function createAccount(code, amount) {
  return {
    checkBalance(pinCode) {
      if (pinCode != code) return "Invalid PIN.";
      if (pinCode == code) return amount;
    },
    deposit(pinCode, depositAmt) {
      if (pinCode != code) return "Invalid PIN.";
      if (pinCode == code) {
        amount = amount + depositAmt;
        return `Succesfully deposited ${depositAmt}. Current balance: ${amount}.`;
      }
    },
    withdraw(pinCode, withDrawAmt) {
      if (pinCode != code) return "Invalid PIN.";
      if (withDrawAmt < amount) {
        amount = amount - withDrawAmt;
        return `Succesfully withdrew ${withDrawAmt}. Current balance: ${amount}.`;
      }
    },
    changePincode(oldPin, newPin) {
      if (oldPin != code) return "Invalid PIN.";
      code = newPin;
      return "PIN successfully changed!";
    },
  };
}

let account = createAccount("1234", 100);
// console.log(account.checkBalance("1234"));
// console.log(account.deposit("1234", 250));
// console.log(account.checkBalance("1234"));
// console.log(account.withdraw("1234", 250));
// console.log(account.changePincode("1234", "09876"));
// console.log(account.checkBalance("1234"));

// account.deposit("1234", 200);
// console.log("acc", account);

// specialAdd

function specialAdd(a) {
  if (a == undefined) return 0;

  return function addNext(b) {
    if (b === undefined) return a;
    a = a + b;
    return addNext;
  };
}
console.log(specialAdd(1)(2)(3)(4)(-10)(1)());
