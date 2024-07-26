let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
let mycreateddate= =newdate(2023, 0, 23)
console.log(mycreateddate.toDateString());  //mon jan 23 2023 << month is started from 0
console.log(mycreateddate.toLocaleString()); 1/23/2023

let createddate1= newDate("01-14-2023")
console.log(createddate1.toLocaleString());

let mytimestamp = Date.now()
console.log(mytimestamp);   //this also prit time
console.log(createddate1.getTime()); //16777672589191<< get time of tht date

console.log(Date.now());    //it is in miliseconds

console.log(Math.floor(Date.now()/1000));   ///it prints in seconds << to remove decvimal we enter floor 



let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth);

// ${newDate.getDay()}     << it is used in such a way in complex ways

newDate.toLocaleString('default',{
weekday:"long",
// timezone:''      << this can be more clear while making proects 

})
