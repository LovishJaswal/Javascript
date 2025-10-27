const marvel_heroes = ["Ironman", "Thor", "Hulk"];
const dc_heroes = ["Superman", "Batman", "Flash"];

//So we have taken two arrays and we want to join them, now you might think, this would do it-

//marvel_heroes.push(dc_heroes)   //Note: it pushes the elements in the array simply
//console.log(marvel_heroes);     //[ 'Ironman', 'Thor', 'Hulk', [ 'Superman', 'Batman', 'Flash' ] ]

//But in actual, it took the second array and put it into the first one as an entry, which is not generally a good behaviour
//we can still access the elements of the second array as-

//console.log(marvel_heroes[3, 1]);  //Thor
//but why to do it, instead we can do something like this-





//marvel_heroes.concat(dc_heroes);
//console.log(marvel_heroes);       //still  //[ 'Ironman', 'Thor', 'Hulk', [ 'Superman', 'Batman', 'Flash' ] ]       
 //Now an important thing, this won't work because in the case of push, we can simply return the first array
 //because .push() simply pushes the element inside the array
 //but. concat returns a new array, so we have to store it in some var to access it

const important = marvel_heroes.concat(dc_heroes);
console.log(important);
//[ 'Ironman', 'Thor', 'Hulk', 'Superman', 'Batman', 'Flash' ]

//Hence now it's good

//But there's ,ore enhanced and good operator named as spread operator ( ...something)
//It simply spreads the elements of array like we break a glass into pieces

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);                                  //[ 'Ironman', 'Thor', 'Hulk', 'Superman', 'Batman', 'Flash' ]
//Hence the same output




//flat

const another_array = [1, ,2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);      //we should write how much depth we wanna go like 2 ,3 but infinity is still ok
console.log(real_another_array);               //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



//How to check if something is array, if not , how to convert it


console.log(Array.isArray("Manhood"));         //false
console.log(Array.from("Manhood"));            //['M', 'a', 'n','h', 'o', 'o','d']
console.log(Array.from({name: "Lakhan"}))  //[]       Interesting    

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));      //[ 100, 200, 300 ]