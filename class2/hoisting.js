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

function outer() {
  var x = 10;
  return function inner() {
    console.log("i am inner: ", x);
  };
}

outer()();
