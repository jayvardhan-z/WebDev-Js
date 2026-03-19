// const tinderUser = new Object()  ---> singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser  = {
    email: "some@gmail.com",
    fullName: {
        userFullname:{
            firstname: "Jayvardhan",
            lastname: "Thorat"
        }
    }
}

// console.log(regularUser.fullName.userFullname.firstname)

// combining two objects

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}


// const obj3 = {obj1, obj2} // doesn't merge the properties of both objects into one single objects, just merges two objects
// const obj3 = Object.assign({}, obj1, obj2);  // this merges the properties of both objects into one single objects, "still less used"
// const obj3 = {...obj1, ...obj2} // "mostly" used to merge the properties of both objects into one single objects "spread Operator"

// console.log(obj3);


// array of objects
const users = [
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 2,
        email: "d@gmail.com"
    },
    {
        id: 3,
        email: "o@gmail.com"
    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // gives the array of keys of tinderUser Object
console.log(Object.values(tinderUser)); // gives the array of values of tinderUser Object
console.log(Object.entries(tinderUser)); // gives the array of key, value pair of tinderUser Object

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // return boolean on whether there exist the property named "isLoggedIn"