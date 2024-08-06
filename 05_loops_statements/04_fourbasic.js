const myObject = {
    js: 'javascript',       //here we learn about iteration in objects
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);     >>>//it will print key value pairs for objects here (for in) loop is used rather than for of loop
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);    >>>//it will print js.rb.py,java,cpp insead if you use key statement only then 0,1,2,3,4 will be printed
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")                   >>>>>//this will print nothing as for in loop cannot be useful here here for of is only useful

// for (const key in map) {
//     console.log(key);
// }