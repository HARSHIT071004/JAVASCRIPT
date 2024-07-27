//object.create   >> constructor objects

// objects literals below  it basically have key or values
const mySym =Symbol('key1')
const jsuser={
    name: "hitesh",
    age:18,
    location: "jaipur",
    isloggedin:false,
    [mySym] : "mykey1"
}

console.log(jsuser.name);
console.log(jsuser["name"]);  //this is more precise way

console.log(jsuser[mySym]);   //mykey1
jsuser.name("harsh")   //this changes the mame in objects
//Object.freeze(jsuser)   <<   //now any value cannot changes

// functions

jsuser.greeting = function(){
    console.log("hello js user");
    }
console.log(jsuser.greeting());    //() this is necessary in greeting otherwise value is undefined

console.log(jsuser.greeting);   //it prints function(anonymously)


jsuser.greetingtwo = function(){
    console.log('hello js user, ${this.location}');   //this return hello js user hitesh
    }

    console.log(jsuser.greetingtwo());






























