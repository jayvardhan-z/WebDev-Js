const name = "Jayvardhan"
const repoCount = 50

// console.log(name + repoCount + " Value");  // avoid the use of this syntax 

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`); // prefer this syntax mostly 

const gameName = new String("jayvardhan-jd-com")

// console.log(gameName[0]);  // j

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('y'));

// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-20, 4);  // (start in this case or end)+length if index is negative 
// console.log(anotherString);  // visit MDN for more info on slice 

// const newStringOne = "    jayvardhan     "
// console.log(newStringOne.trim());

const url = "https://jayvardhan.com/jayvardhan%20thorat"

console.log(url.replace("%20", "-"));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));  // returns the array 