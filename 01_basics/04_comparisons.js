// ---------comparing same datatype----------------

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// ------------- comparing different datatypes -----------------
console.log("2" > 1);
console.log("02" > 1);

// ==(Comparison Operators) and ( >, <, >=, <=  Relational Operators) are treated differently in JS

console.log(null > 0);  // false as null is converted to 0
console.log(null == 0); // false as null is not converted as "==" is not a Relational it is a comparison
console.log(null >= 0); // true as COMPARISON converts null to a Number

// "===" also checks the DataType
console.log("2" === 2); // false