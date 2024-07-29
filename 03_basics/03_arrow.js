const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);   //this kyword can use in this way
        console.log(this);    //this talks about current context
    }

}

user.welcomeMessage()      //to access function
 user.username = "sam"
 user.welcomeMessage()

console.log(this);    //this will print empty fuction  "{}" <<<this is output 
// 1

function chai(){
    let usernammme = "hitesh"    //this will print many value as in console shows many values >>it store 
    console.log(this.usernammme);   //we cannot print this in a function  >>>> undefined
}

chai()

// 2
const chai = function () {
    let username = "hitesh"
    console.log(this.username);    //this will also not print anything in this way >>>undefined
}

// 3
const chai =  () => {        //it is arrow function
    let username = "hitesh"
    console.log(this.username);   //it prints undefined as well
}
chai()

// arrow functions:-

const addTwo1 = (num1, num2) => {      //it is explicit return value functn
    return num1 + num2
}

const addTwo2 = (num1, num2) =>  num1 + num2   //it is implicit return

const addTwo3 = (num1, num2) => ( num1 + num2 )  // this will also work

const addTwo = (num1, num2) => ({username: "hitesh"})   //it is objecrt returning statement this will work now


console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

myArray.forEach(()=> {})        //this we will learn in loops  >> btw you can write arrow and classic function here