const userEmail = []          //this is truthy value

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//FALSY VALUES>>>>>>>>>>>>>>>>>> false, 0, -0, BigInt 0n, "", null, undefined, NaN

//TRUTHY VALUES>>>>>>>>>>>>>>>>>> "0", 'false', " "(there is space in string thatswhy truthu value), [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");            //THIS RUNS
}

// Nullish Coalescing Operator (??): null undefined    >>>these are 2 keywords that is used

let val1;
// val1 = 5 ?? 10                 >>this prints 5
// val1 = null ?? 10             >>this prints 10
// val1 = undefined ?? 15          >> 15
val1 = null ?? 10 ?? 20            //this prints 10
console.log(val1);



// Terniary Operator

// condition ? true : false     there is different bw both of them

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")   //this will print less than 80