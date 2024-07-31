const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})  >>>>//this will print 11,12,13,14,15and soon..
               

const newNums = myNumers
                .map( (num) => num + 1)                //this is chaining
                .map((num) => num * 10 )     
                .filter( (num) => num >= 40)

console.log(newNums);