// singleton 
// Object.create


// object literals

const mySym = Symbol("key1")  // declare a symbol

const JsUser = {
    name: "Jayvardhan",
    "full name": "Jayvardhan Thorat",
    [mySym]: "mykey1",  // syntax to make a symbol as a key
    age: 20,
    location: "Pune",
    email: "jayvardhan@google.com",
    isLoggedIn: false,
    lastLoggenIn: ["Monday", "Friday"],
}

console.log(JsUser)

console.log(JsUser.email) // mostly this way is used to access the key of object
console.log(JsUser["email"]) // more accurate way to access the key of object
console.log(JsUser["full name"])
console.log(JsUser[mySym]) // only this is the way we can access a object's key(Symbol)

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

JsUser.greeting();
JsUser.greetingTwo();



// ⚠️ Important Note (Very Important)

// Object.freeze() is shallow, not deep.

// 👉 That means nested objects can still be modified:

// const user = {
//   name: "Jay",
//   address: {
//     city: "Pune"
//   }
// };

// Object.freeze(user);

// user.address.city = "Mumbai"; // ✅ this WILL change

// console.log(user.address.city); // "Mumbai"