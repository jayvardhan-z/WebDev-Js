"use strict" // for specifying that we are using newer version of JS

// alert(3+3) is used when a JS file is integrated with HTML file that is used in BROWSER , but we are using NodeJS so alert() is not used

let name = "Jayvardhan"
let userName = "Jayvardhan"
let age = 20
let isloggedIn = true
let state;


// -------------------DATATYPES -------------------

// Primitive Datatypes --------
// number => range is upto 2^52
// bigint
// string
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => used for uniqueness

// Non-Primitive Datatypes ----------
// object

console.log(typeof null) // object
console.log(typeof undefined); // undefined is a special type
console.log(typeof name) // The underline is not a JavaScript error. 
// It is a VS Code / ESLint warning because name is a reserved global property in browsers (window.name). 

// avoid the use of name as a variable name
console.log(typeof userName);

console.log(typeof age)
console.log(typeof isloggedIn)
console.log(typeof state)