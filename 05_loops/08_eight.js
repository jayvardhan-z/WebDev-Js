// reduce prototype of array

const myNum = [1, 2, 3]

// const total = myNum.reduce( function (acc, currVal) {
//     console.log(`acc: ${acc} and currval: ${currVal}`);
//     return acc+currVal
// }, 0)

// const total = myNum.reduce( (acc, currVal)=>{
//     console.log(`acc: ${acc} and currval: ${currVal}`);
//     return acc + currVal
// }, 0)

// const total = myNum.reduce( (acc, currVal)=>acc + currVal, 0)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const total = shoppingCart.reduce( (acc, item ) => acc + item.price, 0)
console.log(total);