//  Immediately invoked function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB connected`);
})();  // semicolon is neccesary to end iife so that we can use multiple iife ( ; denotes the end of context )


( () => {
    console.log(`DB connected two`);
} )();


// iife with parameters
( (name) => {
    console.log(`DB connected two ${name}`);
} )("Jayvardhan");


// https://chatgpt.com/c/69bce7ec-8aa4-8321-8c75-29322e14efc1  reasons why iife are used
