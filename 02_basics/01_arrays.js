const myArr = [0,1,2,3,4,5]
const myheroes = ["shalktiman","doga"]
console.log(myArr[0]);
const myArr2 = new Array(1,2,3,4,5)

//arrays metgod

myArr.push(6)
console.log(myArr);   //now it become 0,1,2,3,4,5,6
myArr.pop()   //it delete last value 
console.log(myArr);
myArr.unshift(9) 
myArr.shift()
console.log(myArr.includes(9));  //false 
console.log(myArr.indexOf(9));   //here ans is -1 when it doesnt present in array

const newarrrr= myArr.join()
console.log(myArr);  //[1,2,3,4,5,5,]
console.log(newArrr);   // 1,2,33,3,4,4
console.log(myArr);

// slice
console.log("A", myArr);    //[0,1,2,3,4,5]

const myn1 = myArr.slice(1,3)  // it will prit except range value
console.log(myn1);    //[1,2]

// splice

console.log("B", myArr);   //[0,1,2,3,4,5]

const myn2=myArr.splice(1,3)    //it will print range value
console.log("C".myArr);   //[0,4,5]
console.log(myn2);  //[1,2,3]










