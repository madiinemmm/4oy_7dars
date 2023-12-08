//1-misol
// function sum(a, b, c) {
//   let res;
//   if (a >= b) {
//     res = a;
//   } else {
//     max = b;
//   }
//   if (c >= res) {
//     res = c;
//   }
//   return res;
// }
// console.log(sum(1, 2, 9));

// const sum = function (a, b, c) {
//   let res;
//   if (a >= b) {
//     res = a;
//   } else {
//     res = b;
//   }
//   if (c >= res) {
//     res = c;
//   }
//   return res;
// };
// console.log(sum(1, 2, 9));

// const sum = (a, b, c) => {
//   let res;
//   if (a >= b) {
//     res = a;
//   } else {
//     res = b;
//   }
//   if (c >= res) {
//     max = c;
//   }
//   return res;
// };
// console.log(sum(1, 2, 9));

//2-misol
// function juft(a, b) {
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     if (i % 2 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(juft(5, 10));

// const juft = function (a, b) {
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     if (i % 2 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// };
// console.log(juft(5, 10));

// const juft = (a, b) => {
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     if (i % 2 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// };
// console.log(juft(5, 10));

//3-misol

// function sum(a) {
//   if (a > 99 && a > 1000) {
//     return "Bu uch xonali son emas";
//   } else {
//     let b = a % 10;
//     let o = Math.trunc(a / 10) % 10;
//     let y = Math.trunc(a / 100) % 10;
//     return b + o + y;
//   }
// }
// console.log(sum(155));

// const sum = function (a) {
//   if (a > 99 && a > 1000) {
//     return "Bu uch xonali son emas";
//   } else {
//     let b = a % 10;
//     let o = Math.trunc(a / 10) % 10;
//     let y = Math.trunc(a / 100) % 10;
//     return b + o + y;
//   }
// };
// console.log(sum(155));

// const sum = (a) => {
//   if (a > 99 && a > 1000) {
//     return "uch xonali son emas";
//   } else {
//     let b = a % 10;
//     let o = Math.trunc(a / 10) % 10;
//     let y = Math.trunc(a / 100) % 10;
//     return b + o + y;
//   }
// };
// console.log(sum(155));

//4-misol
// function sum(a) {
//   if (a > 99 && a > 1000) {
//     return "uch xonali son emas";
//   } else {
//     let res = 0;
//     let b = a % 10;
//     let o = Math.trunc(a / 10) % 10;
//     let y = Math.trunc(a / 100) % 10;
//     if (b % 2 == 0) {
//       res += b;
//     }
//     if (o % 2 == 0) {
//       res += o;
//     }
//     if (y % 2 == 0) {
//       res += y;
//     }
//     return res;
//   }
// }
// console.log(sum(256));

// const sum = function (a) {
//   if (a > 99 && a > 1000) {
//     return "xonali son emas";
//   } else {
//     let res = 0;
//     let b = a % 10;
//     let o = Math.trunc(a / 10) % 10;
//     let y = Math.trunc(a / 100) % 10;
//     if (b % 2 == 0) {
//       res += b;
//     }
//     if (o % 2 == 0) {
//       res += o;
//     }
//     if (y % 2 == 0) {
//       res += y;
//     }
//     return res;
//   }
// };
// console.log(sum(256));

// const sum = (a) => {
//   if (a > 99 && a > 1000) {
//     return "xonali son emas";
//   } else {
//     let res = 0;
//     let b = a % 10;
//     let o = Math.trunc(a / 10) % 10;
//     let y = Math.trunc(a / 100) % 10;
//     if (b % 2 == 0) {
//       res += b;
//     }
//     if (o % 2 == 0) {
//       res += o;
//     }
//     if (y % 2 == 0) {
//       res += y;
//     }
//     return res;
//   }
// };
// console.log(sum(216));

//5-misol
// function sum(a) {
//   let res = 1;
//   for (let i = 1; i <= a; i++) {
//     if (a % 3 == 0 && a % 5 == 0) {
//       continue;
//     }
//     res *= i;
//   }
//   return res;
// }
// console.log(sum(5));



// const sum = function (a) {
//   let res = 1;
//   for (let i = 1; i <= a; i++) {
//     if (a % 3 == 0 && a % 5 == 0) {
//       continue;
//     }
//     res *= i;
//   }
//   return res;
// };
// console.log(sum(5));

// const sum = (a) => {
//   let res = 1;
//   for (let i = 1; i <= a; i++) {
//     if (a % 3 == 0 && a % 5 == 0) {
//       continue;
//     }
//     res *= i;
//   }
//   return res;
// };
// console.log(sum(5));

//6-misol
// function sum(a) {
//   let res = 0;
//   for (let i = 1; i <= a; i++) {
//     if (i % 7 == 0 || i % 5 == 0) {
//       res++;
//     }
//   }
//   return res;
// }
// console.log(sum(11));

// const sum = function (a) {
//   let res = 0;
//   for (let i = 1; i <= a; i++) {
//     if (i % 7 == 0 || i % 5 == 0) {
//       res++;
//     }
//   }
//   return res;
// };
// console.log(sum(11));

// const sum = (a) => {
//   let res = 0;
//   for (let i = 1; i <= a; i++) {
//     if (i % 7 == 0 || i % 5 == 0) {
//       res++;
//     }
//   }
//   return res;
// };
// console.log(sum(11));
