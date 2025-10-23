//comparison operators <,>,<=,>=, ==, != wworks in a saimple manner
//just one thing to note here
//never compare two different datatypes because confusion will occur, an example has been given

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

//because comparison operators(<,>,<=,>=) and equality check (==) works in a different manner
//Comparisons convert null to a number treating it as 0
//That's why nul >=0 is true but null > 0 is false

// === is used to check strictly , it don't just compare the data but also the datatype

console.log("2" == 2);// prints true
console.log("2" === 2);//prints false
