const user = {
    name: "Jayvardhan",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.name}, welcome to website`);
        console.log(this); // talks about current context
    }
}

// user.welcomeMessage()
// user.name = "Sam"
// user.welcomeMessage() 


// console.log(this);  // global object in case of Node is a "Empty" object and in case of Browser it is Window Object

// 1st Type of function definition

// function chai() {
//     let username = "Jayvardhan"
//     console.log(this.username);  // gives "undefined" that means "this" doesnt give context of a function it works for object 
// }

// 2nd Type of function definition

// const chai = function() {
//     let username = "Jayvardhan"
//     console.log(this.username);  // gives undefined same reason as above
// }

// 3rd type of function definition
// -------------------------Arrow Function------------------------------

const chai = () => {
    let username = "Jayvardhan"
    console.log(this.username);  // gives undefined same reason as above
    console.log(this);           // gives empty object unlike other type of definition
}

chai()


// ------------------ more about Arrow function ----------------------------------

// basic arrow function
    // const addTwo = (num1, num2) => {
    //     return num1+num2;
    // }

// implicit return 
    // 1 -> const addTwo = (num1, num2) => num1+num2
    // 2 -> const addTwo = (num1, num2) => ( num1+num2 )

// what if i want to return a object
    // const addTwo = () => {username: "Jayvardhan"}  // wont work we have to wrap it in Parenthesis ()
    // const addTwo = () => ({username: "Jayvardhan"})  // works perfectly

console.log(addTwo())