const coding = ["js", "ruby", "java", "python", "cpp"]     //you can go to console after inspect and check more
// 1

// coding.forEach( function (val){        //>>>this is basically call back functon hence has no name
//     console.log(val);     values prints like js,ruby,java,python,cpp
// } )

// 2

// coding.forEach( (item) => {
//     console.log(item);            //here arrow function is used
// } )

// 3

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)      //this is also a way for using for each 

// 4

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);        //>>>>it prints three of the thing item,index,array
// } )

// 5

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);       //this will print languagename of every object in given function
} )