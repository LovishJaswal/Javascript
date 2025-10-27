//+++++++++++++++++++++++NUMS+++++++++++++++++++++++










//You can declare numbers in python in basically two ways-
const number  = 100;
console.log(number);//100
const balance = new Number(100);
console.log(balance);//[Number: 100]

//so we saw that if we declare a constant simply, then it automatically detects the type of data
//but if we declare it using new keyword, initialized as an object, then it's gonna store a number only

//Now we can also convert the balance directly to string and it would give us some extra methods to use.
console.log(balance.toString());//100

  //To find out the length of the string-
  console.log(balance.toString().length);//3
  
  //This one is widely used an it is mostly used in E-commerce sites for precision values
  console.log(balance.toFixed(2));//100.00
  
  //Precision - use it carefully//////Number of significant digits must be in the range of 1-21 and returns a string
  const n1 = 23.374;
  console.log(n1.toPrecision(2)); //23
  console.log(n1.toPrecision(3)); //23.4
  console.log(n1.toPrecision(1)); //2e+1
  
  const n2 = 23.874;
  console.log(n2.toPrecision(2)); //24
  console.log(n2.toPrecision(3)); //23.9
  console.log(n2.toPrecision(1)); //2e+1 - Gave one precise value and others in exponential

  //toLocaleString- Gives commas in bigger values of numbers
  const LSnum = 1000000;
  console.log(LSnum.toLocaleString());          //10,00,000 (IN number system)
  console.log(LSnum.toLocaleString('en-IN'));   //10,00,000 (IN number system)
  console.log(LSnum.toLocaleString('en-US'));   //1,000,000 (US number system)


//Now we know Number is a datatype in JS , so if we write Number in console, then we get many methods under functions
//These methods can be used to find out the exact values, for ex-
//Number.MAX_VALUE         //shows max value for Number in JS
//Number.MIN_VALUE         //shows min value for Number in JS
//Number.MAX_SAFE_INTEGER  //shows max safe integer for Number in JS
//Number.MIN_SAFE_INTEGER  //shows max safe integer for Number in JS











//++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++












//Maths with capital M is itself an object which have too many properties
//We can see all the methods of Maths in console
//Here we get only limited amount of data

console.log(Math);//Object [Math] {} ,,,,,,,shows Math is an object

//Functions of Math object(it's not properties because we are using Math.something()), these parentheses shows functions

  console.log(Math.abs(-5)); //5 , converts negative to positive values and ofc positive remains positive
  console.log(Math.round(4.3)); //4
  console.log(Math.ceil(4.3)); //5
  console.log(Math.round(4.3)); //4
  console.log(Math.min(2, 3, 4, 5, 7)); //2
  console.log(Math.max(2, 3, 4, 5, 7)); //7
 
  

  // Random helper notes:
  // Math.random() -> floating-point number in [0, 1)  (0 inclusive, 1 exclusive)
  
  console.log(Math.random()); // e.g. 0.3878267827652 — floating point in [0, 1)
  
  // Multiply to scale the range
  console.log(Math.random() * 10); // floating-point in [0, 10) — e.g. 4.37837653753 (0 up to 9.999...)
  
  // Shift the range so it doesn't start at 0
  console.log((Math.random() * 10) + 1); // floating-point in [1, 11) — e.g. 6.78633658355 (1 up to 10.999...)
  
  // Remove decimals (integers 1 through 10 inclusive)
  console.log(Math.floor((Math.random() * 10) + 1)); // integers: 1, 2, ..., 10
  
  // Random integer between min and max inclusive (correct)
  const min = 10;
  const max = 20;
  console.log(Math.floor(Math.random() * (max - min + 1)) + min); // integers: 10..20 inclusive
  
  //max - min + 1 gives 11 , that means we want 11 possible values, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  //So Math.random() * 11 gives decimals from: 0 → 10.9999999...
  //+ min --  We shift the range up:  Without adding min, values: 0 to 10,  After adding min, values: 10 to 20
  
  
  