//Let's firstly make a string
let name = "XYZ";
const roll_no = 124;
console.log("Hello, My name is " + name + " and my roll number is " + roll_no);
// Output: Hello, My name is XYZ and my roll number is 124
//Hence, we just saw string concatenation

//But this is quite old method, nowadays, string interpolation is used
//where we inject the variables at interpolation placeholder -> ${}

//same output can be obtained by this method too

console.log(`Hello, My name is ${name} and my roll number is ${roll_no}`); //Important : Backticks(``) are used instead of semicolon.
//Output: Hello, My name is XYZ and my roll number is 124




//Now what's the benefit of doing all this?
//Actually, by using this we can apply methods directly here, an example would be this

console.log(`Hello, My name is ${name.toLowerCase()} and my roll number is ${roll_no}`);





//Now, let's see an another method to declare a string, only for learning , not applicable quite often in real world, we just learning things

const name2 = new String('Hitesh');         // "String" is case-sensitive
//This is also same as declaring the variable simply, by that way we are invoking an object too but temporarily
//And in this one, we used a 'new' keyword to use objects in javascript and then in the constructor we give the value.

//Important warning-
//new String() creates a String object, not a primitive string.

//Primitive:  let a = "Hello"; // typeof a = "string"
//Object: let b = new String("Hello"); // typeof b = "object"

//Therefore,
//"hello" === new String("hello")   // false, Because objects are compared by reference


//But we are doing this because we want to study an important thing

//If we declare a variable simply in the browser console and then ask for the value, it simply returns the value,
//but if the string has been created by using new String() method, then we get the datatype as object
//and if we ask the value from console, it gives us key value pairs, indexing like(starting from 0 and going till n-1)
//also it gives us various types of methods in prototype and also the length of the string


//Let's see some of the applications of doing all this, creating a string object
//now, we can simply apply methods to our string

const myClass = new String('CSE A');
console.log(myClass[4]); //A (starts from 0)
console.log(myClass.__proto__); //{} , here it returns an empty object but this is not actually empty
//This is one method to access prototypes. This is just a syntax. We can access the methods(functions) directly
console.log(myClass.length);//5
console.log(myClass.toLowerCase());//cse a ,,,,,but but but it didn't change our og string , because we are working with primitive datatypes
console.log(myClass.charAt(2)); //E
console.log(myClass.indexOf('S')); //1
console.log(myClass.substring(0, 2)); //CS , 2nd index has been ignored, we alr know this for strings
console.log(myClass.trim());//Automatically deleted the empty spaces from front and end of the string
console.log(myClass.includes('CSE'));//true
console.log(myClass.split(' '));//gives an array containing two strings 'CSE' and 'A'
//now an important one
//Imagine we asked for a url from a user, and user enetered something like this-
//"https://manav.com/manav basra"
//now the browser will automatically ignores white spaces and would add %20
//"https://manav.com/mana%20basra"
//so to prevent this type of case, we can use 
//Object.replace('%20', '-');





//Most important thing i've learned today-------------
//No doubt we've created an object datatype but it's still wrapped in string container
//so no matter what we do , og data won't change
//Mutability is neither decided by stack vs heap or primitive vs reference concept 
//It’s decided by the language design.
//The JavaScript engine simply does not allow mutation of string content. but it does for objects
//because objects are mutable in nature, ex. proving immutability----

const str = new String("HELLO");
str[0] = "X";
console.log(str); // still HELLO 

//Hence the og string didn't change when we applied myClass.toLowerCase
//but objects would've changed

const obj = {name: "Hitesh"};
obj.name = "Raj";  // ✅ mutates

//-------------------------------Important---------------------------------------------------------//
const random = "lorem ipsum";
console.log(random.toUpperCase());//LOREM IPSUM
//This is also possible and most commonly used, no need to declare string as object
//Primitive strings automatically gain access to built-in string methods because JavaScript temporarily wraps them in a String object (called boxing)
//when a method is called. After the method executes, this temporary object is destroyed. 



//This is why operations like
//  "Hello".length and "Hi".toUpperCase() work despite strings being primitive.

//All string methods are defined on String.prototype, which can be viewed using Object.getPrototypeOf() or the (non-standard) __proto__ property.
//Although new String() exposes these prototype methods clearly and is useful for learning, it should not be used in real projects 
//because it creates a wrapper object that can cause unexpected behavior. For example, "hello" === new String("hello") evaluates to false, 
//since objects are compared by reference, not value.

//In summary, strings are immutable by design, regardless of whether they are accessed as primitives or through wrapper objects,
//and string methods always return new values without changing the original. Prototype chaining enables strings to access methods,
//and boxing allows primitive strings to momentarily behave like objects.


//What is prototype ?
//In JavaScript, every object has a prototype, which acts as its parent object.
//Objects (children) inherit properties and methods from their prototype. Multiple objects can share the same prototype,
//so they can access the same methods without duplicating them. This forms a prototype chain: if a property or method is not found on the object itself
//JavaScript looks up the chain to the prototype, then the prototype’s prototype, and so on, until Object.prototype. 
//For example, all strings inherit methods like .toLowerCase() and .slice() from String.prototype.