// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr.filter((x) => x >= 6));

// console.log(arr.map((x) => x * 2));

// console.log(arr.reduce((acc, x) => acc + x, 0));

// const data = fetch("https://fakestoreapi.com/products");
// data
//   .then((res) => res.json())
//   .then((products) => console.log("Products: ", products));

const pro = new Promise((res, rej) => {
  setTimeout(() => {
    // res("Hello World");
    rej("Something went wrong");
  }, 2000);
})
  .then((message) => {
    console.log("Result is: ",message);
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
