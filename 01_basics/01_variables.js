// use of semicolon is optional 

const accountId = 1239
let accountName = "Jayvardhan"
var accountCity = "Nashik"
accountEmail = "jayvardhanthorat02@gmail.com"
let accountPassword = "1249"

let accountState; // value will be undefined

// can't change a const variable
// accountId = 2

// avoid the use of var variable because there is a scope problem in this case

accountCity = "Pune"
accountEmail = "jayvardhanthorat07@gmail.com"
accountPassword = "1294"


console.log(accountId);

// another way of displaying variables all together
console.table([accountId, accountName, accountPassword, accountEmail, accountCity, accountState]);