function sayMyName() {
    console.log("Naman");
}

sayMyName(); //This is known as the execution of the function
//sayMyName -> This is known as reference of the function ,, Important

function addTwoNumbers(num1, num2){               //These are known as parameters
    console.log(num1 + num2)
}
addTwoNumbers() //NaN
addTwoNumbers(3, 4)  //7
addTwoNumbers(2, "4")  //24                       //We are passing arguments
addTwoNumbers(2, "a")   //2a
addTwoNumbers(5, null)  //5

//If we want to say (if username === undefined), we can simply do it like this- if(!username)
//Always check if you are returning a value or printing it , and functions don't work after return keyword

//Default paramters

function userLoginMessage(username = "Sam"){
    console.log(`${username} just logged in`)
}

userLoginMessage("Ram")  //Ram just logged in
userLoginMessage("")     // just logged in
userLoginMessage()       // Sam just logged in