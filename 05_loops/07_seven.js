const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// here in myNums we cant modify the elements
    // const newNums = myNums.forEach((num)=>{  
    //     num = num+10
    // })
    // console.log(myNums);
    

// to overcome the problem of not being able to modify the element of a array by forEach loop we use map prop

    // const newNums = myNums.map((num)=>num+10)
    // console.log(newNums);


// chaining of methods
    // filter is used to return filtered value based on the condition and map return the operation performed 
    const newNums = myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)  
    console.log(newNums);


// https://chatgpt.com/c/69be4b87-5f20-83a2-866f-eaa11e44c6c6  -----> difference between map and filter