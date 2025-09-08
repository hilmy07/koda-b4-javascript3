// Mencari 20 built in method
// Mencari 5 built in function
// Jelaskan fungsi dari masing masing built in method dan built in function tersebut dgn komentar
// Berikan contoh penggunaannya

console.log(" ----- 20 Built in Methods -----");
// 20 Built-in Methods
console.log("--- date ---");
// 1. Date
// Fungsi: Mengambil tanggal dan waktu saat ini

// Date()
// Fungsi: Mengembalikan string representasi dari tanggal dan waktu saat ini
const nowDate = new Date();
console.log(nowDate);

// Date.now()
// Fungsi: Mengembalikan jumlah milidetik sejak 1 Januari 1970
const milliseconds = Date.now();
console.log(milliseconds);

// Date.parse()
// Fungsi: Mengurai string tanggal dan mengembalikan jumlah milidetik sejak 1 Januari 1970
const parsedDate = Date.parse("2023-01-01");
console.log(parsedDate);

console.log("--- Math ---");
// 2. Math
// Fungsi: Melakukan operasi matematika

// Math.random()
// Fungsi: Mengembalikan angka acak antara 0 (inklusif) dan 1 (eksklusif)
const randomNum = Math.random();
console.log(randomNum);

// Math.round()
// Fungsi: Membulatkan angka ke bilangan bulat terdekat
const roundedNum = Math.round(4.7);
console.log(roundedNum);

// Math.max()
// Fungsi: Mengembalikan nilai maksimum dari sekumpulan angka
const maxNum = Math.max(1, 5, 3);
console.log(maxNum);

// Math.min()
// Fungsi: Mengembalikan nilai minimum dari sekumpulan angka
const minNum = Math.min(1, 5, 3);
console.log(minNum);

// Math.sqrt()
// Fungsi: Mengembalikan akar kuadrat dari sebuah angka
const sqrtNum = Math.sqrt(25);
console.log(sqrtNum);

// Math.pow()
// Fungsi: Mengembalikan hasil perpangkatan dari sebuah angka
const powNum = Math.pow(2, 3);
console.log(powNum);

// Math.floor()
// Fungsi: Membulatkan angka ke bawah ke bilangan bulat terdekat
const floorNum = Math.floor(4.7);
console.log(floorNum);

// Math.ceil()
// Fungsi: Membulatkan angka ke atas ke bilangan bulat terdekat
const ceilNum = Math.ceil(4.2);
console.log(ceilNum);

console.log("--- String ---");
// 3. String
// Fungsi: Manipulasi dan operasi pada string

// string.length
// Fungsi: Mengembalikan panjang string
const str = "Hello, World!";
console.log(str.length);

// string.toUpperCase()
// Fungsi: Mengubah semua karakter dalam string menjadi huruf besar
const upperStr = str.toUpperCase();
console.log(upperStr);

// string.toLowerCase()
// Fungsi: Mengubah semua karakter dalam string menjadi huruf kecil
const lowerStr = str.toLowerCase();
console.log(lowerStr);

// string.includes()
// Fungsi: Memeriksa apakah string mengandung substring tertentu
const includesHello = str.includes("Hello");
console.log(includesHello);

// string.replace()
// Fungsi: Mengganti substring tertentu dengan substring lain
const replacedStr = str.replace("World", "JavaScript");
console.log(replacedStr);

// string.split()
// Fungsi: Memecah string menjadi array berdasarkan pemisah tertentu
const splitStr = str.split(", ");
console.log(splitStr);

console.log("--- Array ---");
// 4. Array
// Fungsi: Manipulasi dan operasi pada array

const arr = [1, 2, 3, 4, 5];

// array.push()
// Fungsi: Menambahkan elemen baru di akhir array
arr.push(6);
console.log(arr);

// array.pop()
// Fungsi: Menghapus elemen terakhir dari array
const poppedElement = arr.pop();
console.log(poppedElement);
console.log(arr);

// array.shift()
// Fungsi: Menghapus elemen pertama dari array
const shiftedElement = arr.shift();
console.log(shiftedElement);
console.log(arr);

console.log(" ----- 5 Built in Functions ----- ");
// 5 Built-in Functions

// parseInt()
// Fungsi: Mengonversi string menjadi bilangan bulat
const intValue = parseInt("42.3");
console.log(intValue);

// parseFloat()
// Fungsi: Mengonversi string menjadi bilangan desimal
const floatValue = parseFloat("42.8");
console.log(floatValue);

// isNaN()
// Fungsi: Memeriksa apakah nilai adalah NaN (Not a Number)
const checkNaN = isNaN("Hello");
console.log(checkNaN);

// encodeURIComponent()
// Fungsi: Mengkodekan komponen URI dengan mengganti karakter tertentu dengan escape sequences
const encodedURI = encodeURIComponent("Hello World!");
console.log(encodedURI);

// decodeURIComponent()
// Fungsi: Mendekode komponen URI yang telah dikodekan
const decodedURI = decodeURIComponent(encodedURI);
console.log(decodedURI);
