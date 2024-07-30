// our basic is done till now we talk about control flows:-
// 1
// if
const isUserloggedIn = true
const temperature = 41
//  2
if ( temperature === 40 ){   
    console.log("less than 50");          //this is if else statemnts
} else {
    console.log("temperature is greater than 50");
}

console.log("Execute");

//<, >, <=, >=, ==, !=, ===(this will check type), !==      /////these are comparision operators
// 3
const score = 200

if (score > 100) {
    let power = "fly"                 //if u use var instead of let it will print outside print value but not a good habit of using var
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);     //this will show error as power not defined in outside scope

// 4
const balance = 1000

/*if (balance > 500) console.log("test"),console.log("test2");*/   //this is not good practice code should not do this

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");        //if,else if,else statements
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");     //this statemant will be printed

}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {      //you can also add many condition by adding '||' these symbol
    console.log("User logged in");
}