//datatype conversions are often misunderstood and it confuses people too often, so read it with all of your focus

//Let's create a variable 

let score = "33"; //current datatype: string
let valueInNumber = Number(score);                                    //we converted the datatype 
console.log(valueInNumber, typeof valueInNumber); //33 number

//but in a scenario where we are requesting data from frontend, we don't know what datatype would we recieve
//for ex. we request data from the user using commands such as const{score} = req.body
//In this scenario we don't know that user entered an integer or a string
//let's say user entered 33abc as a score, now let's see what happens

let scoreUserEntered = "33abc";//current datatype : still string
let valueInNumberUser = Number(scoreUserEntered);
console.log(valueInNumberUser, typeof valueInNumberUser); //NaN number

//so, here we can see that it converted the datatype to number
//but it doesn't hold any value so we must be very careful about this scenario // That's the reason people prefer TypeScript

//Case of null
let scoreNull = null;
let valueInNumberNull = Number(scoreNull);                                   
console.log(valueInNumberNull, typeof valueInNumberNull); //0 number


//Case of undefined
let scoreUndefined = undefined;
let valueInNumberUndefined = Number(scoreUndefined);      
console.log(valueInNumberUndefined, typeof valueInNumberUndefined); //NaN number


//Case of boolean
let scoreBoolean = true;
let valueInNumberBoolean = Number(scoreBoolean);    
console.log(valueInNumberBoolean, typeof valueInNumberBoolean); //1 number


//Case of string
let scoreString = "loremIpsum";
let valueInNumberString = Number(scoreString);
console.log(valueInNumberString, typeof valueInNumberString); //NaN number

//so we can analyze that it always converts the datatype but the value gets changed according to the og datatype
//Now we will see what happens when we convert to boolean datatype

//1 => true, 0 => false, "" => false, "loremIpsum" => true (all of bool datatype)
// and numbers get converted to strings easily