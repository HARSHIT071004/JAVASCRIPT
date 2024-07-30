// till now we have completed with control statements:
//for loops:-
// 1
for (let i = 0; i <= 10; i++) {          //here  let variable should use 
    const element = i;
    if (element == 5) {                   //you cn insert control statemnet inside loop 
        //console.log("5 is best number");  
    }
    //console.log(element);
    
}

// we can declare the i baar baar as uska scope pichl loop tak khatam hogya 
// console.log(element);

// 2
// loop in loop:- 
for (let i = 1; i <= 10; i++) {                         //outer loop
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {                  //inner loop
    //console.log(`Inner loop value ${j} and inner loop ${i}`);   >>>many times print occurs
    //console.log(i + '*' + j + ' = ' + i*j );      >>>this will prints table of loops
   }
// 3
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);              >>this will print 3 names
    
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break                                //it prints nthing after break
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue                                   //it will print skipping the condition only
    }
   console.log(`Value of i is ${index}`);
    
}