"use strict"; //There were actually some problems in JS in integrating newer versiom
              // so this line makes sure that the code is executed in newer version mode
              //not mandatory but a good practice

//alert("Hello World!"); //This will show a popup in the browser with "Hello World!"
// but it won't work in Node.js environment
//Focus as more as you can on code readability
//Visit Ecma Script or MDN documentation for more details on JS

//Javascript has various data types, let's see some of them


//1. Number

let myNumber = 42;               //Integer
let myFloat = 3.14;              //Floating point number
let myNegativeNumber = -7;       //Negative number
let myInfinity = Infinity;       //Infinity
let myNaN = NaN;                 //Not a Number
console.log("Number Types:");
console.log({myNumber, myFloat, myNegativeNumber, myInfinity, myNaN});


//2. String

let myString = "Hello, JavaScript!"; //String using double quotes
let myChar = 'A';                    //String using single quotes
let myTemplateString = `This is a template string with a number: ${myNumber}`; //Template string using backticks
console.log("String Types:");
console.log({myString, myChar, myTemplateString});


//3. Boolean

let myTrue = true;               //Boolean true
let myFalse = false;             //Boolean false
console.log("Boolean Types:");
console.log({myTrue, myFalse});


//4. Undefined and Null

let myUndefined;                //Undefined variable
let myNull = null;              //Null value
console.log("Undefined and Null Types:");
console.log({myUndefined, myNull});

//symbol is used for uniqueness and object is also there, but we will cover them later

//If you want to know the datatype of a variable, you can use typeof operator
console.log("Data Types using typeof:");
console.log("myNumber is of type:", typeof myNumber);                     //number
console.log("myString is of type:", typeof myString);                     //string
console.log("myTrue is of type:", typeof myTrue);                         //boolean
console.log("myUndefined is of type:", typeof myUndefined);               //undefined
console.log("myNull is of type:", typeof myNull);// Could be an interview que, this would output "object"(this is a known quirk in JS)
console.log("myNaN is of type:", typeof myNaN);                           //number (NaN is considered a number in JS)

//This covers the basic data types in Javascript. More complex types like Objects and Arrays will be covered later.