const marvel=["thor","ironman"]
const dc = ["superman","flash"]
marvel.push(dc)      //push can do action on given arrays
console.log(marvel); //[ marvel values ,[dc array]]
console.log(marvel[3][1]);  //this will print flash
// concatenation
const all=marvel.concat(dc)
console.log(all);   //[ , , , , , ]  << this will merge 2 arrays
// spread can also be use

const allhero=[...marvel,...dc]       //this has same work as concat    
 console.log(allhero);           


const thoook= [1,2,3,[2,3,4],[4,5,6,6,5]]
const real=thoook.flat(Infinity)
console.log(real);               //here it is [1,2,3,2,3,4,,4,5,6,6,5]
console.log(Array.isArray("HITESH"));    //this only write true or false
console.log(Array.isfrom("HITESH"));    //this convert in array
console.log(Array.isfrom({name: "HITESH"}));   //this print empty array

const be1 =100
const be2 =200
const be3  =300
console.log(Array.of(be1,be2,be3));  [100,200,300]
