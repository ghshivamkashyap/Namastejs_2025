// write all type of functions in js with log of jello world
// 1. Function Declaration
function greet() {
  console.log("Hello, World!");
}
greet(); // Output: Hello, World!

// 2. Function Expression

const greetExpression = function () {
  console.log("Hello, World from Function Expression!");
};
greetExpression(); // Output: Hello, World from Function Expression!

// 3. Arrow Function
const greetArrow = () => {
  console.log("Hello, World from Arrow Function!");
};
greetArrow(); // Output: Hello, World from Arrow Function!

// 4. Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("Hello, World from IIFE!");
})(); // Output: Hello, World from IIFE!

// 5. Higher-Order Function
function higherOrderFunction(callback) {
  console.log("Inside Higher-Order Function!");
  callback(); // Call the passed function
}

function callbackFunction() {
  console.log("Hello from Callback Function!");
}
higherOrderFunction(callbackFunction); 

// 6. Function Returning Another Function
function outerFunction() {
  return function innerFunction() {
    console.log("Hello from Inner Function!");
  };
}

const innerFunc = outerFunction(); 

innerFunc(); // Output: Hello from Inner Function!
