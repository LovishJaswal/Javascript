//Stack(primitive), Heap(Non-Primitive)
//Stack memory is only used by primitive datatypes such as string, integer and all
//whereas heap memory is used by Non Primitive datatypes such as objects, functions
//now whenever we pass data from one variable to other in stack memory, a copy is passed instead of the og data
//Pass by value

let random = "lorem ipsum";
let rubbish = random;
rubbish = "Important Info";

console.log(random);//lorem ipsum
console.log(rubbish);//Important Info


//That's why it didn't change because the og data is safe
//whereas in heap memory, the reference of the og parameter is passed 
//hence the og data has been changed
//Pass by reference


let userOne = {
    email: "someone@somewhere.com",
    upi: "user1@ybl",
}

let userTwo = userOne;
userTwo.email = "user2@ybl";

console.log(userOne.email);//user2@ybl
console.log(userTwo.email);//user2@ybl
