//We discussed about creating an object through constructor and singleton is made
//Let's discuss that deeply now

//const tinderUser = new Object();
//const tinderUser = {}
//console.log(tinder);   //{} for both of these

//But the difference is, the first one made a singleton object whie the second one is a non singleton object

//Now let's see nesting in objects

const regularUser = {
    name: "mohit",
    biodata: {
        age: 13,
        city: "Hoshiarpur",
        Gender: "male",
        Hobbies: {
            Indoor: "Chess",
            Outdoor: "Kabaddi"
        }
    }
}

console.log(regularUser.name);                         //mohit
console.log(regularUser.biodata);                      //{age: 13, city: 'Hoshiarpur',  Gender: 'male', Hobbies: { Indoor: 'Chess', Outdoor: 'Kabaddi' }}
console.log(regularUser.biodata.age);                  //13         
console.log(regularUser.biodata.city);                 //Hoshiarpur
console.log(regularUser.biodata.Gender);               //male
console.log(regularUser.biodata.Hobbies);              //{ Indoor: 'Chess', Outdoor: 'Kabaddi' }
console.log(regularUser.biodata.Hobbies.Indoor);       //Chess
console.log(regularUser.biodata.Hobbies.Outdoor);      //Kabaddi    



//--------------------------------------------------------------------------------------------------------------------------------



//Now what if you want to merge two objects

const obj1 = {
    1 : "a", 
    2 : "b"
}
const obj2 = {
    3 : "c", 
    4 : "d"
}

//You might think this would do it
const obj3 = {obj1, obj2};
console.log(obj3);                       //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//BUt again that same array's probem on this one too, it returns an object inside an object
//Instead we can use assign

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);                                 //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//Some important things about assign operator, it copies all the values of enumerable own properties from one or more source object to a target object
//and returns the target object, so it's better to alr store it inside a new var, also {} should be used as a target objevt so it can copy from source
//objects and copy and returns the data inside the target object


//But we can use a more simple method instead of writing these many lines, the spread operator

const obj5 = {...obj1, ...obj2}
console.log(obj5);                                 //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } , same output


//-------------------------------------------------------------------------------------------------------------------------------------------


//When we rq data from the database, it usually comes in objects inside an array, something like this

//const arr = [{keys:values}, {keys:values}, {keys:values}]
//so we can access it as arr[1.key], arr[2.key]

//Also we can access all the keys separately and values separately by
console.log(Object.keys(obj1));                   //[ '1', '2' ]
console.log(Object.values(obj1));                 //[ 'a', 'b' ]

//An important thing to note here, the keys and values comes as an array, so we can simply loop through them , this is an important property we gonna use later on

//we can use
console.log(Object.entries(obj1));   //[ [ '1', 'a' ], [ '2', 'b' ] ]
//returns arrays inside an array of key value pairs, not widely used

//we can use this method to check if the key exists or not, returns a boolean
console.log(obj1.hasOwnProperty(1));         //true
console.log(obj1.hasOwnProperty("name"));    //false




//----------------------------------------------Objects Destructuring----------------------------------------------




//Now objects destructuring isn't a mandatory but good practice
//It just helps us to make our code shorter and more readable

const Course = {
    name: "Chai aur js",
    fee: 0,
    Instructor: "Hitesh Chaudhary"
}

//Now we can access the keys normally, but problem occurs when we have to do it multiple times
//and write the syntax again and again
//Instead we can use Objects Destructuring

const {Instructor} = Course;
//Now we can do
console.log(Instructor);         //Hitesh Chaudhary
//or even shorter
const {name:n} = Course;
console.log(n);                  //Chai aur js