// first of all, let's see how a constant is declared in Javascript

const myConstant = 11                     //Totally depends on you to add a semicolon, not mandatory in JS;




//Now, let's see how a variable is declared in Javascript
//There are three ways to declare a variable in Javascript: var, let, and "nothing"
var myVar = 10;                           //Old way of declaring a variable, don' use it now becaise of its functional scope
let myLet = 20;                           //New way of declaring a variable, most used nowadays because of its block scope
myNothing = 30;                           //Declaring a variable without var or let



//Let's see how these variables behave
console.log("myConstant:", myConstant);  //11
console.log("myVar:", myVar);            //10
console.log("myLet:", myLet);            //20
console.log("myNothing:", myNothing);    //30


//Trying to change the values
//myConstant = 15;                       //This will throw an error because constants cannot be reassigned
myVar = 15;                              //This is allowed
myLet = 25;                              //This is also allowed
myNothing = 35;                          //This is also allowed

//If i wanna see the output without writing multiple console.log, I can do it like this:
console.table({myConstant, myVar, myLet, myNothing}); //Displays the values in a table format
//Final values will be:
//myConstant: 11
//myVar: 15
//myLet: 25
//myNothing: 35 (inside a table)