const myNums = [1, 2, 3]
// 1
// const myTotal = myNums.reduce(function (acc, currval) {    >>>>here recuce function is used 
//     console.log(`acc: ${acc} and currval: ${currval}`);       //har baar ki value print here in acumulator if u print 3 then first line input is 3                                                                                                                                                                                         
//     return acc + currval                              >>>>it will print sum of funal value
// }, 0)                                                 >>>>>>this is start value of accumulator
// 2
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)    //>>it is same code as given above but i smart way      //>>>>>here arrow fumnction is used here 0 is start value

console.log(myTotal);

//3 
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)    // it is basically a use of reduce function

console.log(priceToPay);    //output is 22996