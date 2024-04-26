"use strict";
//1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// function isDivisibleBy3Or7(n) {
//   if (typeof n !== "number") {
//     return "Parametr bir reqem olmalidir";
//   }
//   return n % 3 === 0 || n % 7 === 0;
// }
// console.log(isDivisibleBy3Or7(6));
// console.log(isDivisibleBy3Or7("test"));

//2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.
// function factorial(n) {
//   if (typeof n !== "number" || n < 0) {
//     return "Parametr pozitiv tam reqem olmalidir";
//   }
//   if (n === 1 || n === 0) {
//     return 1;
//   }
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(5)); //120

//3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.
// function sumOfSquaresEvenNumbers(arr) {
//   if (!Array.isArray(arr)) {
//     return "Parametr array qebul etmelidir";
//   }
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number" && arr[i] % 2 === 0) {
//       sum += arr[i] * arr[i];
//     }
//   }
//   return sum;
// }
// console.log(sumOfSquaresEvenNumbers([1, 2, 3, 4, 5]));

//4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e,
//ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin.
// function login(mail, password) {
//   if (mail === "cavid@code.edu.az" && password === "12345") {
//     console.log("Girish olundu");
//   } else {
//     console.log("Mail ve yaxud password sehvdir ");
//   }
// }
// login("cavid@code.edu.az", "12345");

//5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.
// function sumOfOddNumbers(arr) {
//   if (!Array.isArray(arr)) {
//     return "Parametr array qebul etmelidir";
//   }
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof (arr[i] === "number") && arr[i] % 2 !== 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));
//6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// function countOfEvenNumbers(arr) {
//   if (!Array.isArray(arr) === "number") {
//     return "Parametr array qebul etmelidir";
//   }
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof (arr[i] === "number") && arr[i] % 2 === 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countOfEvenNumbers([1, 2, 3, 4, 5]));
//8) Icerisinde name, surname, age, email olan bir nece student objectleriniz var.
//Ashagida elave etdiklerimi functionlar sekilinde yazin,
//functionlar objectlerden ibaret array qebul edecek.
// 1) Yashi 18-25 araliginda olan telebelerin sayi.
// 2) Emailinde "c" herfi olan studentlerin sayi.
// function countStudentsInAgeRange(students, minAge, maxAge) {
//   return students.filter(
//     (student) => student.age >= minAge && student.age <= maxAge
//   ).length;
// }

// function countStudentsWithEmailContainingC(students) {
//   return students.filter(
//     (student) =>
//       student.email.toLowerCase().includes("c") &&
//       !student.email.includes("com")
//   ).length;
// }
// const students = [
//   { name: "Ziko", surname: "Ashirov", age: 18, email: "ziko@gmail.com" },
//   { name: "Cavid", surname: "Bashirov", age: 30, email: "cavid@gmail.com" },
//   { name: "Baca", surname: "Aliyev", age: 25, email: "baca@gmail.com" },
// ];
// //console.log(countStudentsInAgeRange(students, 18, 25));
// console.log(countStudentsWithEmailContainingC(students));
function countStudentsWithEmailC(students) {
  let count = 0;
  students.forEach((student) => {
    let email = student.email.split(".")[0];
    if (email.toLowerCase().includes("c")) {
      count++;
    }
  });
  return count;
}
const students = [
  { name: "Ziko", surname: "Ashirov", age: 18, email: "ziko@gmail.com" },
  { name: "Cavid", surname: "Bashirov", age: 30, email: "cavid@gmail.com" },
  { name: "Baca", surname: "Aliyev", age: 25, email: "baca@gmail.com" },
];
let result = countStudentsWithEmailC(students);
console.log(result);

//9) Function yazacaqsiz, Functiona parametr olaraq string gelecek.
// Hemin function gelen parametrin ilk herfini boyuk herf edib geri qaytarsin.
function captalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(captalizeFirstLetter("salam"));
