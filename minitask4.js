// melakukan fetching dr url diatas
// mengubah uppercase string dari email menjadi lowercase
//   - dengan menggunakan built-in method
//   - tanpa menggunakan built-in method
// tampilkan list email yg sudah diubah ke dalam bentuk array
// handling fetch data dengan then-catch dan async-await

function toLowerManual(str) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";

  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = -1;

    for (let j = 0; j < upper.length; j++) {
      if (char === upper[j]) {
        index = j;
        break;
      }
    }

    if (index !== -1) {
      result += lower[index];
    } else {
      result += char;
    }
  }

  return result;
}

async function getData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();

    const emailsBuiltIn = data.map((user) => user.email.toLowerCase());
    const emailsManual = [];

    for (let i = 0; i < data.length; i++) {
      emailsManual[i] = toLowerManual(data[i].email);
    }

    console.log("\n ----- async-await ----- ");
    console.log(" ----- Built-in method ----- ");
    console.log("Built-in toLowerCase:", emailsBuiltIn);

    console.log("\n ----- Manual ----- ");
    console.log("Manual:", emailsManual);
  } catch (error) {
    console.error(error.message);
  }
}

getData();

// console.log(" ----- then-catch ----- ");
const thenCatch = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(`Response status: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const emailsBuiltIn = data.map((user) => user.email.toLowerCase());
      const emailsManual = data.map((user) => toLowerManual(user.email));
      console.log("\n ----- then-catch ----- ");
      console.log(" ----- Built-in method ----- ");
      console.log("Built-in toLowerCase:", emailsBuiltIn);
      console.log("\n ----- Manual ----- ");
      console.log("Manual:", emailsManual);
    })
    .catch((error) => {
      console.error(error.message);
    });
};

thenCatch();
