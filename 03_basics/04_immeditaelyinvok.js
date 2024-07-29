// Immediately Invoked Function Expressions (IIFE)

function chai(){
    console.log("DBCONNECTED")
}
chai()      //this can be change with immediately invoked function that is given below:- 


(function chai(){                   //this is basically used to remove the poolution occurs because of global scope 
    // this is named IIFE 
    console.log(`DB CONNECTED`);
})();  // this should be end with semicolon


// below is simple iife:-
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);   //arrow function can also be usedin way>>> here name is calls and go to first line then extract the input form third line and prints the value
} )('hitesh')