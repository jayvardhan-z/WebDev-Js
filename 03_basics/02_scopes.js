// {}  of functions, if else statment these are the block scopes and {} of object is not a scope it is definition

// let a = 300 // global scope

if (true) {
    let a = 10
    const b = 20
    // var c = 30  // can be accessed outside the scope of if statement "Disadvantage"
}

// console.log(c);


function one() {
    const username = "Jayvardhan"
    
    function two() {
        const website = "Github"
        console.log(username);
    }

    // console.log(website);   // inner function can access outer function but vice versa is not possible
    two()
}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);   ---> works without error
    }
    // console.log(website);  ----> give error
}

// console.log(username);  ----> give error


// ++++++++++++++++++ interesting ++++++++++++++++++
// hoisting


addone(5) // works without error
function addone(num){
    return num + 1
}



addTwo(5)  // gives error on defining funnction like this 
const addTwo = function(num){
    return num + 2
}