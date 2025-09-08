const wait = (str, time) => {
  return new Promise((resolve, reject) => {
    if (typeof str !== "string") {
      return reject("Err: Input must be a string");
    } else {
      setTimeout(() => {
        resolve(str);
      }, time);
    }
  });
};

// wait("Selamat pagi", 3000).then((res) => {
//   console.log(res);
//   wait("Selamat siang", 1500).then((res) => {
//     console.log(res);
//     wait("Selamat malam", 1000).then((res) => {
//       console.log(res);
//     });
//   });
// });

console.log(" --- then catch ---");
wait("John", 1500)
  .then((res) => {
    console.log(res);
    return wait("Ed", 1000);
  })
  .then((res) => {
    console.log(res);
    return wait("Jane", 500);
  })
  .then((res) => {
    console.log(res);
    console.log(" --- async await ---");
    name();
  })
  .catch((error) => {
    console.error(error);
  });

async function name() {
  try {
    const john = await wait("John", 1500);
    console.log(john);
    const ed = await wait("Ed", 1000);
    console.log(ed);
    const jane = await wait("jane", 500);
    console.log(jane);
    const karin = await wait(false, 450);
    console.log(karin);
  } catch (error) {
    console.error(error);
  }
}
