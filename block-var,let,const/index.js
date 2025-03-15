// {
//   var a = 10;
//   let aa = 10;
//   const aaa = 10;
// }
// console.log(a); // 10
// console.log(aa); // ReferenceError: aa is not defined
// console.log(aaa); // ReferenceError: aaa is not defined

// shadowing = shadowing in js is when a variable is declared in a local scope with the same name as a variable in the outer scope
var a = 10;
{
  var a = 20;
  console.log("14: ", a);
}
console.log("16: ", a);

let aa = 10;
{
  let aa = 20;
  console.log("21: ", aa);
}
console.log("23: ", aa);

const aaa = 10;
{
  const aaa = 20;
  console.log("28: ", aaa);
}
console.log("30: ", aaa);

// description = var is function scoped, let and const are block scoped
