//promise - a promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it's not resolved (e.g. a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
const createorder = (cb) => {
  return new Promise((res, rej) => {
    const success = true;
    if (success) {
      setTimeout(() => {
        res({
          status: "success",
        });
      }, 2000);
    } else {
      setTimeout(() => {
        rej("order creation failed");
      }, 2000);
    }
  });
};

const pay = createorder()
  .then((data) => {
    if (data.status == "success") {
      console.log("order created successfully");
    }
  })
  .then(() => {
    console.log("payment done successfully");
  })
  .catch((err) => {
    console.log("err: ", err);
  });

  
const userdata = await fetch("https://api.github.com/users/ghshivamkashyap")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
    return null;
  });

console.log("userdata: ", userdata);
