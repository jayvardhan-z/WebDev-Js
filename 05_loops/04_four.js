// to iterate over Objects use for-in loop

const myObject = {
    js: "Javascript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby"
}

// for (const key in myObject) {
//     // console.log(key);  // to access key of a object
//     // console.log(myObject[key]); // to access values of a object
// }

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {            // for in loops are mostly not used for arrays
    //console.log(programming[key]);
} 

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const [key, value] in map) {  // doesnt print anything so for in loop is "not used" to iterate over map 
//     console.log(key);
// }