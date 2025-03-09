console.log(f); //prints actual function because f is hoisted
console.log(x); //prints undefined because x is not hoisted
var x = 10;

function f() {
  console.log("i am f");
}

console.log(fun); //prints undefined because fun is not hoisted

var fun = () => {
  console.log("i am fun");
};
