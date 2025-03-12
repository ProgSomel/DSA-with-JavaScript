//! Condition statement
// let ans = Number(prompt("What is your age? "));

// if (!isNaN(ans)) {
//   if (ans >= 18) {
//     console.log("You can vote");
//   } else {
//     console.log("You can not vote");
//   }
// } else {
//   console.log("invalid input");
// }

//? Bill discount
// let amount = Number(prompt("What is final Amount? "));
// if (!isNaN(amount) && amount > 0) {
//   if (amount > 0 && amount <= 5000) {
//     console.log(amount);
//   } else if (amount > 5001 && amount <= 7000) {
//     console.log(amount - Math.floor((5 * amount) / 100));
//   } else if (amount > 7000 && amount <= 9000) {
//     console.log(amount - Math.floor((10 * amount) / 100));
//   } else if (amount > 9000) {
//     console.log(amount - Math.floor((20 * amount) / 100));
//   }
// } else {
//   console.log("Wrong input");
// }
// let dis = 0;

// if (!isNaN(amount) && amount > 0) {
//   if (amount > 0 && amount <= 5000) {
//     dis = 0;
//   } else if (amount > 5001 && amount <= 7000) {
//     dis = 5;
//   } else if (amount > 7000 && amount <= 9000) {
//     dis = 10;
//   } else if (amount > 9000) {
//     dis = 20;
//   }
//   console.log(amount - Math.floor((dis * amount) / 100));
// } else {
//   console.log("Wrong input");
// }

//? Bijli bill
// let unit = Number(prompt("Enter Electricity Bill"));
// let amount = 0;
// if (unit > 400) {
//   amount = (unit - 400) * 13; //? 3900
//   unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8; //? 3900 + 1600
//   unit = 200;
// }
// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 6; //? 3900 + 1600 + 600
//   unit = 100;
// }
// amount += unit * 4;
// console.log(amount);

//? INR Denomination
// let amount = 4823;
// if (amount >= 500) {
//   console.log("500: ", Math.floor(amount / 500));
//   amount = amount % 500;
// }
// if (amount >= 200) {
//   console.log("200: ", Math.floor(amount / 200));
//   amount = amount % 200;
// }
// if (amount >= 100) {
//   console.log("100: ", Math.floor(amount / 100));
//   amount = amount % 100;
// }
// if (amount >= 50) {
//   console.log("50: ", Math.floor(amount / 50));
//   amount = amount % 50;
// }
// if (amount >= 20) {
//   console.log("20: ", Math.floor(amount / 20));
//   amount = amount % 20;
// }
// if (amount >= 10) {
//   console.log("10: ", Math.floor(amount / 10));
//   amount = amount % 10;
// }
// if (amount >= 5) {
//   console.log("5: ", Math.floor(amount / 5));
//   amount = amount % 5;
// }
// if (amount >= 2) {
//   console.log("2: ", Math.floor(amount / 2));
//   amount = amount % 2;
// }
// if (amount >= 1) {
//   console.log("2: ", amount);
// }

//! Ternary Operator
// 12 > 13 ? console.log('Heehehe') : console.log('Hoooo');
// console.log(122 > 13 ? "Hello": "Hi");

// //!? Nested Ternary Operator
// let num = 0;
// console.log(num>0?"positive":num<0?"negative":"zero");

//! Switch Statement
let num = Number((0.1 + 0.2).toFixed(1));
switch (num) {
  case 0.1:console.log("Hello");
    break;
  case 0.3:console.log("Hiiiiiii");
    break;
  default:
    console.log("None");
}
