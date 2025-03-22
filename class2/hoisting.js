// console.log(f); //prints actual function because f is hoisted
// console.log(x); //prints undefined because x is not hoisted
// var x = 10;

// function f() {
//   console.log("i am f");
// }

// console.log(fun); //prints undefined because fun is not hoisted

// var fun = () => {
//   console.log("i am fun");
// };

// console.log(window); //prints window object because window is hoisted

// // js is a loosely typed language, so we can assign any type of value to a variable

// // scope = where the variable is accessible;
// function a() {
//   // var x = 11;
//   console.log(x);
//   function b() {
//     // var x = 12;
//     console.log(x);
//   }
//   b();
// }

// a();

// // scope chain  = when a variable is not found in the current scope, it goes to the parent scope to find the variable

// // closure = when a function is able to access the variables of its parent function even after the parent function has finished executing

// function outer() {
//   var x = 10;
//   // x = 200;
//   return function inner() {
//     console.log("i am inner: ", x);
//   };
// }

// outer()();

// function f() {
//   setTimeout(() => {
//     console.log("i am f");
//   }, 1000);

//   console.log("i am f2");
// }
// f();

// explanation  -
// 1. for loop runs and setTimeout is called 5 times
// 2. setTimeout is an async function, so it is pushed to the callback queue
// 3. after 5 seconds, the callback queue is executed
// 4. i is 6 because the for loop has already finished executing
// 5. so, i is printed 5 times

// callback function - a function that is passed as an argument to another function
// higher order function - a function that accepts another function as an argument 

function a() {
  setTimeout(() => {
    console.log("timer");
  }, 2000);
}

function b() {
  console.log("b");
}

b();
a();
