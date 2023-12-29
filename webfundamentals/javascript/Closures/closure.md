What is a closure in JavaScript?

Answer: A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of the variables that were in scope at the time of the closure's creation.
Can you provide an example of a closure in JavaScript?

Answer:
javascript
function outer() {
let outerVar = 10;
function inner() {
console.log(outerVar);
}
return inner;
}
let closureFn = outer();
closureFn(); // Outputs 10
Explain the concept of the lexical scope in relation to closures.

Answer: Lexical scope refers to the way variables are resolved in nested functions. Closures have access to variables from their lexical scope, even if the outer function has finished executing.
How does a closure help with encapsulation in JavaScript?

Answer: Closures encapsulate variables within a function, preventing them from polluting the global scope. This helps in achieving data privacy and modular code.
What is the use of closures in practical scenarios?

Answer: Closures are commonly used for data hiding, creating private variables and methods, implementing callbacks, and in scenarios where you want to maintain state between function calls.
How can closures be used to create private variables in JavaScript?

Answer:
javascript
Copy code
function createCounter() {
let count = 0;
return function() {
count++;
console.log(count);
};
}
let counter = createCounter();
counter(); // Outputs 1
counter(); // Outputs 2
Explain the memory implications of closures.

Answer: Closures retain references to their outer variables, preventing them from being garbage collected. It's important to be mindful of potential memory leaks, especially when closures are created within loops.

How does the setTimeout function demonstrate the concept of closures?
Answer: The setTimeout function creates a closure by referencing the outer variables even after the outer function has completed execution. This allows the inner function to access the variables from its lexical scope.

javascript
function outer() {
let message = "Hello, Closure!";
setTimeout(function() {
console.log(message);
}, 1000);
}
outer();
These questions cover the basics of closures in JavaScript and their practical applications. Understanding closures is crucial for writing clean and efficient JavaScript code.
