// way 1 of Promise approach
    const promiseOne = new Promise(function (resolve, reject) {
      // Do an async task
      // DB calls, cryptography, network

      setTimeout(function () {
        console.log("Async task is complete");
        resolve();
      }, 1000);
    });

    promiseOne.then(function () {
      console.log("Promise consumed");
    }); // So when resolve() is called → .then() executes


// another way of above approach
    new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("Async task is complete");
        resolve();
      }, 1000);
    }).then(function () {
      console.log("Promise consumed");
    });


// resolve(value) sends value to this() as a parameter
    const promiseThree = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" }); // ---------------resolve(value) → sends value to .then() which becomes the parameter of this()
      }, 1000);
    });

    promiseThree.then(function (user) {
      console.log(user);  // { username: "Chai", email: "chai@example.com" }
    });

// chaining used in DB connection
    const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
        resolve({ username: "Jay", password: "123" });
        } else {
        reject("Error: Something went error");
        }
    }, 1000);
    });

    promiseFour
    .then(function (user) {
        console.log("Resolve the issue in", user);
        return user.username
    })
    .then(function (username){
        console.log(username)
    })
    .catch(function (msg) {
        console.log(msg);
    }).finally(() => console.log("The promise is either resolved or rejected"));


//  another syntax of .then() .catch()

    const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true
            if (!error) {
                resolve({username: "javascript", password: "123"})
            } else {
                reject('ERROR: JS went wrong')
            }
        }, 1000)
    });

    async function consumePromiseFive(){
        try {
            const response = await promiseFive
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    
    consumePromiseFive()


// fetch()

    // using async function and try-catch
    async function getAllUsers(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log("E: ", error);
        }
    }
    
    getAllUsers()
    
    // using .then().catch()
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))