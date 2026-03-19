// function sayMyName() {
//     console.log("J")
//     console.log("a")
//     console.log("y");
// }

// sayMyName //----> reference

// sayMyName() // ----> execution


// function addTwoNum(num1, num2) {
//     return num1+num2
// }

// const res = addTwoNum(4, 2)
// console.log(res);


function loginUserMessage(username) {
    if(typeof username === "string"){
        return `${username} just logged in succesfully`
    }
    else if(!username){
        return "Enter a username"
    }
}

// console.log(loginUserMessage("Jayvardhan"));  // when no arguments are passed then function returns "undefined"
// console.log(loginUserMessage());



// "..." is called both "rest" as well as "spread" operator based on how they are used
function CalculateCartPrice(val1, val2, ...num) {  // in this case "..." is a spread operator
    return num  // val1 = 200, val2 = 300
}

// console.log(CalculateCartPrice(200, 300, 500, 800));

const user = {
    username: "Jayvardhan",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

handleObject({
    username: "Sam",
    price: 399
})

const newArray = [200, 400, 500]

function retSecValue(getArray){
    return getArray[2]
}

console.log(retSecValue(newArray));
console.log(retSecValue([200, 400, 500, 1000]));