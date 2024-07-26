const name = "hrllo"
const phone =30
console.log(name + phone+ " hii");  //this is outdated
console.log('my name is${name.toLowerCase}and my phone is ${phone}'); //this upper case type of things can also be used

const gamename = new String('hiteshhhh')
console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);  //9
console.log(gamename.toUpperCase);
console.log(gamename.charAt(2));   //t
console.log(gamename.indexOf('t'));

const substring =gamename.substring(0,4)      //this cxannot have negative values
console.log(substring);   //hite

const anotherstring = gamename.slice(-8,4)    //it will print negative of a numbers<<  hhhh
console.log(anotherstring);

const trim = "harshit"
console.log(trim);
console.log(trim.trim());

const url ="https://www.youtube.com/watch?v=fozwNnFunlo&list=PPSV"
console.log(url.replace('watch', '--'))
console.log(url.includes('youtube'));     //true








