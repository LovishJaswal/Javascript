//Arrays are most commonly used object in JS 
//WE alr know arrays, indexing and all
//JS arrays suporrts different type of data in one variable and the arays are resizable
//JS array-copy-operations create shallow copies(og array data would change) instead of deep copies(og array won't change)

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr.length);         //6

myArr.push(6)
console.log(myArr);                //[0, 1, 2, 3, 4, 5, 6]

myArr.pop()
console.log(myArr);                //[ 0, 1, 2, 3, 4, 5 ]

myArr.unshift(-1)
console.log(myArr);                //[-1, 0, 1, 2, 3, 4, 5]

myArr.shift()
console.log(myArr);                //[ 0, 1, 2, 3, 4, 5 ]

console.log(myArr.includes(9));    //false (boolean)

console.log(myArr.indexOf(3));     //3
console.log(myArr.indexOf(9));     //-1     because it doesn't exist



const newArr = myArr.join()
console.log(myArr);                 //[ 0, 1, 2, 3, 4, 5 ]
console.log(newArr);                //0,1,2,3,4,5    
console.log(typeof newArr);         //string


//Most Important


            console.log("A ", myArr);           //A  [ 0, 1, 2, 3, 4, 5 ]                     printed the og array
            
            
            //Slice
            
            
            const myn1 = myArr.slice(1,3);
            console.log(myn1);                  //[ 1, 2 ]  3rd index not included
            
            console.log("B ", myArr);           //B  [ 0, 1, 2, 3, 4, 5 ]                     nothing happens after slice
            

            //Splice
            


            const myn2 = myArr.splice(1, 3);    
            console.log(myn2);                  //[ 1, 2, 3 ]     3rd index included
            
            console.log("C ", myArr);           //C  [ 0, 4, 5 ]                               og array changes after splice
            

            
//Hence the difference between slice and splice is not only that splice also includes the last given indexs elements
//But it also changes the og array