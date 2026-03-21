// for-each loop only for array widely used
// also widely used when handling data from DataBase

const coding = ["Javascript", "Java", "C++", "Python"]

// way no 1 -----> normal function
    
    // coding.forEach(function (item){
    //     console.log(item);
    // })

// way no 2 ---> arrow function
    
    // coding.forEach( (item) => {
    //     console.log(item);
    // })

// way no 3 ----> another function is invoked

    // function printMe(item) {
    //     console.log(item);
    // }

    // coding.forEach(printMe)

// important ------------- parameters in forEach --------------------

    // coding.forEach( (val, index, coding) => {
    //     console.log(val, index, coding);
    // })


// Usecase in DataBase

    // const myCoding = [
    //     {
    //         languageName: "Java",
    //         extension: "java"
    //     },
    //     {
    //         languageName: "Python",
    //         extension: "py"
    //     },
    //     {
    //         languageName: "Javascript",
    //         extension: "js"
    //     }
    // ]

    // myCoding.forEach( (item) => {
    //     console.log(item.extension);
    // } )