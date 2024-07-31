// for of loops is given below:-

// ["", "", ""]
// [{}, {}, {}]
// 1
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}
// 2
const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)    //this is backticks not a sinngle quote(')(`) >>>>both of them is different
}  //this prints values by solo characters in different lines with space included
// 3
// Maps   :::: it returns in key value pairs

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")      //IN=>India -----in this way output is [printed]
map.set('IN', "India")    //maps stores unique value so this bnever runs
// console.log(map);
// 

// 4
for (const [key, value] of map) {
    // console.log(key, ':-', value);    //it prints IN:- India
}
// 5
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//  for (const [key, value] of myObject) {    //
//      console.log(key, ':-', value);                     >>>>these object is not iterable,there is other method of using for of in this object 
    
// // }