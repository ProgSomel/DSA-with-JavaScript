//! Accept and print answer
// let age = prompt('What is your age? ');
// console.log(age); //?Here age will become string .... because prompt will accept it as string
// --------------------------------------- 
// let age = Number(prompt("What is your age? ")); //?type casting or type conversion 
// console.log(age); //?Here age will become number
// ----------------------------------------
// let age = prompt('Enter your age: ');
// age = Number(age);
// console.log(age);25
// ----------------------------------------

//! Swap two variables via 3 methods 
//? 1. Swap with extra variable 
// let a = 10;
// let b = 20;
// console.log(`Before swapping a is ${a} and b is ${b}`);
// let c = a; //? c = 10, a = 10
// a = b; //? a = 20
// b = c; //? b = 10, c = 10
// console.log(`After swapping a is ${a} and b is ${b}`);

//? 2. With mathmetic formula 
// let a = 10;
// let b = 20;
// console.log(`Before swapping a is ${a} and b is ${b}`);
// a = a + b; //? a = 30
// b = a - b; //? b = 30 - 20 = 10
// a = a - b; //? a = 30 - 10 = 20;
// console.log(`After swapping a is ${a} and b is ${b}`);

//? 3. With destructuring assignment
// let a = 10;
// let b = 20;
// console.log(`Before swapping a is ${a} and b is ${b}`);
// [a, b] = [b, a];
// console.log(`After swapping a is ${a} and b is ${b}`);

//! Operator Operation 
//? Arithmetic Operation 
// +, -, /, %, * 
// let a = 12;
// let b = 22;
// console.log(12/5);
// console.log(Math.floor(12/5));
// console.log(7%2);
//? Sum of Digits 
// let a = 4567; //4+5+6+7;
// console.log(a%10);
// console.log(a/10);

//? Relational Operation 
// <, >, <=, >=, != 
// console.log(10>5);
// console.log(10<5);
// console.log(10>=10);
// console.log(10!=10);
// console.log(10!==10); //? Strict version

// var a = 12; //? Assignment operator
// console.log(12==12);
// console.log(12 == '12');
// console.log(12 === '12');

//? Logical Operator 
// ?||, &&
// console.log(10>6 && 5<9);
// console.log(10>6 && 15<9);
// console.log(10>6 && 15<9 && 18>9);
// console.log(10<6 || 15<9 || 18>9);

//? Unary Operator 
// ++, --
// let i = 11;
// i = i++ + ++i;
// console.log(i); //? 24

// let b = true;
// b++;
// console.log(b);

// let a = 10++;
// console.log(a); //? Invalid left-hand side expression in postfix operation

// let d = 10;
// let e = ++(a++);
// console.log(e); //? Invalid left-hand side expression in postfix operation

//! Math Funciton 
// console.log(Math.round(10.6)); //? 11
// console.log(Math.round(10.3)); //? 10
// console.log(Math.round(10.5)); //? 11
// console.log(Math.ceil(10.1)); //? 11
// console.log(Math.floor(10.9)); //? 10
// console.log(Math.trunc(10.8)); //? Remove decimal part
// console.log(Math.pow(2, 4)); //? 16
// console.log(Math.sqrt(4)); //? 2
// console.log(Math.cbrt(27)); //? 3
// console.log(Math.abs(-5)); //? 5
// console.log(Math.abs(5)); //? 5
// console.log(Math.max(75, 12, 69)); //? 75
// console.log(Math.min(75, 12, 69)); //? 12
// console.log(Math.random()); //? will give random value between(excluding 0, 1) 0, 1
// console.log(Math.random()*10); //? will give random value between(excluding 0 and 10) 0, 10
// console.log(Math.trunc((Math.random()*9000) + 100000));
// let a = 89.0985;
// console.log(a.toFixed(2)); //? 89.10

//? Calculate area and perimeter of Rectangle 
// let a = 5;
// let b = 7;
// console.log(a*b); //? 35

//? Generate OTP?
// console.log(Math.trunc(Math.random()*9000)+1000);

//? Area of Triangle using Heron's Formula 
let a = 5;
let b = 4;
let c = 3;

let s = (a+b+c)/2;
console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));


//? Circumastance of circle 
let r = 12;
console.log((2*Math.PI*r).toFixed(2));

