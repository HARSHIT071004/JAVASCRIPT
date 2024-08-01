let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);    //this will print 2,4,6,8,10
    index = index + 2
}

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);    //print flash batman,superman
    arr = arr + 1
}

let score = 1 //this will print 10 times
// let score = 11 >>>>> but in this it will print 11 for once as one time is necessary in do while loop
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);