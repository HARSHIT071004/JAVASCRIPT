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