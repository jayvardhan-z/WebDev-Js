let score = "Jayvardhan"

//console.log(typeof score);   => string
//console.log(typeof(score));  => string

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);  => number
// console.log(valueInNumber);  => NaN


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Jayvardhan"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Jayvardhan" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// -------------Operations---------------

let value = 3
let negValue = -value

console.log(negValue)

// console.log(2**3); // 2^3

let str1 = "Hello"
let str2 = "Jayvardhan"

let str3 = str1 + str2
console.log(str3);


console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1+2+"2")

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2  // not preferred mostly

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
