//Now there are two ways to make object
//One is through constructor method and the other one is through object literal

//      1)        //Constructor method-
                  //Object.create
                  
                  //If we make objects through constructor method then there would be a singleton, and if we make it theough
                  // //object literals , there would be multiple instances that would be made, we'll discuss
                  //about constructor method and singleton later on, but right now we would focus on objects through 
                  //object literals

//      2)        //Object literals
                  
                  const JSuser = {
                      name: "Ram",          //These values occurs in key and value pairs
                      age: 17,
                      isLoggedIn: true,
                      email: "ram@google.com",
                      lastLoggedInDays: ["Monday", "Saturday"],
                      "try-commas": "lorem ipsum"
                    }

//name is key and Ram is value, we can access both key and values of the object, now
//one imp. thing, JS automatically considers that +++name+++ to be a string , no need to enclose it in double inv commas
//and you can give anything to your value , like an integer or a string




//How to access the elements of an object ?

//      1)        //One way-
                  console.log(JSuser.age);   //17

//      2)        //Second way
                  //console.log(JSuser[age]);     //This would give error because as we know JS took age as a string,
                  //so we have to enclose it in db inv commas
                  console.log(JSuser["age"]);     //17
                  
                  //But what if we specifically enclose our key in db inv commas ? and try to access it using . method
                  //Let's try to access try-commas
                  
                  //console.log(JSuser.try-commas);   //This would ofc give an error because we only can access it through square brackets only
                  console.log(JSuser["try-commas"]);  //lorem ipsum
                  
                  //Hence i think it's a good practice to always access the objects' values with square brackets instead of db inv. commas





//--------------------------------------------------------------------------------------------------------------------------------------------------





//Now there's a datatype named as symbol
//It creates a lot of confusion for beginners
//Now the interviewer will ask a question like declare a symbol and then add it as a key in object, let's see, how would we tackle this

//Wrong Approach-

            const mySym = Symbol("key1");         //declared mySym as symbol , gave value key1 to it and will use it as a key now
            const someObj ={
                mySym: "myKey1"                   //mySym used as a key with value mykey1
            }
            
            console.log(mySym);                    //Symbol(key1)
            console.log(someObj.mySym);            //myKey1
            console.log(typeof someObj.mySym);     //string

            //So what happened to "key1"? It never got overwritten.It’s just a description for debugging —
            //stored inside the Symbol but not accessible or changeable.
            //When we did: mySym = Symbol("key1"); "key1" wasn’t a value that can be replaced —
            //it’s like naming a file “key1” but not writing “key1” inside the file.
            //Hence, when we created: const someObj = { mySym: "myKey1" };
            //we didn’t overwrite mySym; we just created a separate property named "mySym".
            
//Hence you can see that we took mySym as symbol but when we used it as a key and tried to access the value of the key
//it gave us the right value but the datatype of mySum now has been changed to string that means we did something wrong
//Actually you can't declare and access a symbol as a key like that , you have to enclose it in square brackets


//Right Approach-

            const mySym2 = Symbol("key2");         //declared mySym2 as symbol , gave value key2 to it and will use it as a key now
            const someObj2 ={
                [mySym2]: "myKey2"                   //mySym2 used as a key with value mykey2
            }
            
            console.log(mySym2);                      //Symbol(key2)
            console.log(someObj2[mySym2]);            //myKey2
            console.log(typeof someObj2[mySym2]);     //string

//ok, so now we have seen the wrong and right approach to see if rather we are using symbol as a key, or we just used a string
//Now you might think, we are getting the same output anyways of same datatype, mykey of string datatype , so why even bother to 
//whether we are using strings or symbols as a key, but here's something important-

//you’ll often get the same value output when you use string keys, but Symbols protect you from bugs, collisions, and exposure in larger systems.
//They’re less about value and more about safety and control.



//------------------------------------------------------------------------------------------------------------------------------------





//How to change/override the values of keys in objects

const newObj = {
    name: "Nothing",
    age: 34
}

newObj.age = 22;
console.log(newObj);          //{ name: 'Nothing', age: 22 }

//We can also freeze our objects so that no one could change it

Object.freeze(newObj);
newObj.name = "Avantika";
console.log(newObj);           //{ name: 'Nothing', age: 22 }       Hence we can see that the object didn't change




//--------------------------------------------------------------------------------------------------------------------------------------




//Functions on objects

const newerObject = {
    name: "Alisha",
    age: 16
}

newerObject.greeting = function(){
    console.log("Hello user !");
}

console.log(newerObject.greeting);        //[Function (anonymous)]
console.log(newerObject.greeting());      //Hello user !   undefined

//Here we would learn a new thing, why did this undefined appeared with our output ?
//Actually, our funstion isn't returning anything rn, so when JS reaches console.log(...),
//it tries to log the return value of that function call.
//Since our function didn’t return anything, the default return is undefined.
//So to prevent this, either we should call the function simply instead of doing console.log()
//or we should return hello user inside the function

//Now what if we wanna access the values of the objects with functions ?

newerObject.greetingTwo = function(){
    return `Hello, ${this.name}`
}

console.log(newerObject.greetingTwo());     //Hello, Alisha   , This time no undefined
//this is used to access the content of the current object, we can access all of the keys with this
//this is not a variable or a pointer — it’s a special keyword in JavaScript.
//Inside a function that belongs to an object, this refers to that object itself.
//So here, this.name means “go to the same object where this function is written and take its name key.”
//Hence it accesses newerObject.name, which is "Alisha".
//You can think of it like a reference to the current owner object of the function.