const wait = (str, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str);
    }, time);
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

async function name() {
  try {
    const john = await wait("John", 1500);
    console.log(john);
    const ed = await wait("Ed", 1000);
    console.log(ed);
    const jane = await wait("Jane", 500);
    console.log(jane);
  } catch (error) {
    console.error(error);
  }
}

name();
