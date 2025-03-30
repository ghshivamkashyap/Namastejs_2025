let arr = [1, 2, 3, 4, 5];

// map  - returns a new array with the results of calling a provided function on every element in the calling array.
console.log(
  arr.map((item) => {
    return item * 2;
  })
);

// filter  - creates a new array with all elements that pass the test implemented by the provided function.

console.log(
  arr.filter((item) => {
    return item % 2 != 0;
  })
);

// reduce - executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
console.log(
  arr.reduce((acc, curr) => {
    console.log(`acc: ${acc}, curr: ${curr}`);
    return Math.max(acc, curr);
  }, -1)
);
