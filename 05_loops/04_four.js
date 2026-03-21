const myObject = {
    js: "Javascript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby"
}

for (const key in myObject) {
    console.log(key);  // to access key of a object
    console.log(myObject[key]); // to access values of a object
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }