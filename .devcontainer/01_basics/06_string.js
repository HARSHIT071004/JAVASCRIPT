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

const aaosaalo= "puneet-hell-tu"
console.log(aaosaalo.split('-'));   //[punnet,hell,tu]

const scor= 400   //400
console.log(scor);

const balance = new Number(100);   //Number :100
console.log(balance);

console.log(balance.toString().length);  //here it is the properties of string as it is converetd into strings
// this 100 is now converted in strings
console.log(balance.toFixed(2));

const othernumber = 23.4567
console.log(othernumber.toPrecision(4));   //23.45

const hundreds=100000000
console.log(hundreds.toLocaleString());

numberss.MAX_VALUE   //it tells us the max value that it can store

console.log(Math);
console.log(Math.abs(-4));   //here negative become positive
console.log(Math.round(3.33));
console.log(Math.ceil(5.6));   //upper value
console.log(Math.floor(4.55)); // lower value
console.log(Math.min(2,3,4,5,6,7,8));  //mininmum value
console.log(Math.min(2,3,4,5,6,7,8));   //maximum value
console.log((Math.random()*10) +1);   //it always print bw 0 and 1  << this make the dice game if we want 1 to 6 value  << +1 is for if value is 0.0333  something


// this will random value in given range below
const max =30
const min = 10
console.log(Math.floor(Math.random()*(max-min+1))+min);   //now this value come in a range


