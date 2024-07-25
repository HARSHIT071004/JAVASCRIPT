// there are 2 types primitive and non primitive language

const score = 100
const shell=100.4    //here we donot need to define the type of data
const chai=null
let useremail;   //it is undefind

const id=Symbol("123")
const anotherid=Symbol("123")

console.log(id===anotherid); 
const bidnum = 222222222222222222222222222222n    //it automatically covert into bigint

// arrays non primitive

const heroes = ["shaktman","ninja","don "];
// objects
let obj={
    name1:"harshit",
    num7: 22,
}

const func=function(){  //this is the definition of fuction in JS << typeof this function id function
console.log("hello world")}

//non primitive datatype type of is function but functions return type is objectfunction


// ******************************************************************************************

// thereb are two mainy 2 type of memory 
// 1 stack (primitive)
// 2 heap (non primitive)

/*STACK TYPE*/
let my="hitesh"
let another= my
another = "chai"
console.log(my);     // hitesh
console.log(another); // chai    becAUSE IT IS COPY ONLY not original

/*HEAP*/
let useone{
    email="har@gmail.com",
     upi = "har@ybl"
}
let user2 = userone
user2.email ="hitesh@gmail.com"

console.log(userone.email); //hitesh@gmail.com
console.log(user2.email);    //hitesh@gmail.com  << it is reference typr means original










