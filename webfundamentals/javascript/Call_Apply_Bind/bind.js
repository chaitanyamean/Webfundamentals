const kevin = {
  name: "Kevin",
  getName: function () {
    console.log(`name is ${this.name}`);
  },
};

const lisa = {
  name: "lisa",
};

// console.log(kevin.getName.bind(lisa)());

let btn = document.querySelector("#clickme");
btn.addEventListener("click", kevin.getName.call(kevin));

// bind will return the a new function with context so that u can call it later

// bind example with no this
function applySalesTax(taxRate, price) {
  return price + price * taxRate;
}

let taxinIndia = applySalesTax.bind(null, 18);
let taxinUs = applySalesTax.bind(null, 42);

console.log(taxinIndia(1));
console.log(taxinUs(1));

// Bind class example

class CounterGame {
  constructor(initialCount, buttonElement) {
    this.count = initialCount;
    this.button = buttonElement;
    this.button.addEventListener("click", () => this.increment()); /// this.increment.bind(this)
  }

  increment() {
    ++this.count;
    console.log(this.count);
  }
}
let btn1 = document.querySelector("#clickme");
const counter1 = new CounterGame(0, btn1);
