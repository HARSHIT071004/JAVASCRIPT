let score =2
let age="33abc"
let name = null
let hello= undefined
let bool=true
let value = Number(age)
let value1 = Number(score)
let value2 = Number(name)  
let value3 = Number(hello) 
let value4 = Number(bool) 
console.log(typeof score); 
console.log(typeof age);//it is basically type converesion 
console.log(typeof value); //this is used toc heck type of given age which output is NaN
// above is basically problem in JS     
console.log(typeof name);   // prints 0
console.log(typeof hello);  //prints NaN 
console.log(typeof bool); 
let hii="hitesh"
let boole = Boolean(hii)
console.log(boole);   //this will give true but for empty string it will give false
let hell=33
let stringnum = String(hell)
console.log(stringnum);
console.log(typeof stringnum);


// **********************************8operations**********************************************************

let value7 = 3
let negvalue = -value7
console.log(negvalue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**3);
// complex prob
console.log("1"+2);//12
console.log(1+"2");//12
console.log("1" + 2 + 2);  //122
console.log(1+2+"2");  //32
console.log(2+2);
console.log(2+2);

let gamecounter=100
gamecounter++;
++gamecounter;
console.log(gamecounter);