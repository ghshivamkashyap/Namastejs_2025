const promiseAPI = () => {
  return new Promise((res, rej) => {
    let isResolve = true;
    if (isResolve) {
      setTimeout(() => {
        res("Promise resolved");
      }, 2000);
    } else {
      setTimeout(() => {
        rej("Promise rejected");
      }, 2000);
    }
  });
};

const fetchData = async () => {
  // Using then/catch to handle the promise
  try {
    const data = promiseAPI();
    data
      .then((res) => {
        console.log("then/catch", res); //2
      })
      .catch((err) => {
        console.error(err);
      });
    console.log("after promiseAPI then/catch"); //1
  } catch (error) {
    console.error(error);
  }
};

fetchData();

const fetchData1 = async () => {
  // Using then/catch to handle the promise
  try {
    const data = await promiseAPI();
    console.log("await", data); //3

    console.log("after promiseAPI await"); //4
  } catch (error) {
    console.error(error);
  }
};

fetchData1();
