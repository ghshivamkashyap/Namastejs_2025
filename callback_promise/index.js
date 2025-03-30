const createorder = (cb) => {
  return new Promise((res, rej) => {
    const success = false;
    if (success) {
      setTimeout(() => {
        // console.log("order created successfully");
        res("order created successfully");
      }, 2000);
    } else {
      setTimeout(() => {
        // console.log("order creation failed");
        rej("order creation failed");
      }, 2000);
    }
  });
};

const pay = createorder()
  .then((data) => {
    console.log("data: ", data);
  })
  .catch((err) => {
    console.log("err: ", err);
  });
