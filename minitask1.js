const car = {
  toyota: "Corolla",
  honda: "Civic",
  ford: "Focus",
  chevrolet: "Malibu",
};

const values = Object.values(car);
for (k = 0; k < values.length; k++) {
  console.log(values[k]);
}

console.log("-----");
const keys = Object.keys(car);
for (k = 0; k < keys.length; k++) {
  console.log(keys[k]);
}

console.log("\n-- Manual --");
for (let k in car) {
  console.log(car[k]);
}

console.log("-----");

for (let k in car) {
  console.log(k);
}
