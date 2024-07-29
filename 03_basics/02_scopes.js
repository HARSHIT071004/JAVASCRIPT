var c=300   //global scope this will print but inside scope value will be print because of var
let a=60
if(true){
    let a=10
    const b=88
    var c=77
    d=88
    console.log("inner:", a)  //this will print the value a here because it is in scope
}
console.log(a);  //a and b will not print anything but glbal scope is print in a
console.log(b);
console.log(c);  //here it will print 77 but it should not print 77 thats why we doesnt se var
console.log(d);   //it also prints vale


function one(){
    const usernamme ="harshit"
    function two(){
        const website ="youtube"
        console.log(usernamme)
    }
    console.log(website);    //it will give error thtaswhy two never execute
    two()
}
one()      //there two() also execute


if(true){
    const username = 'harshit'
    if(username==="harshit"){
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website);   //it will give error as out of scope
}
console.log(username);    //this will also give error as out of scope

function addone(num){       //it is basically function
    return num+1              //
}

// 1
addone(5)

const addtwo = function(num){       //it is basically can be call expression
    return num+2                     //only return not prints anything
}
// 2
addtwo(5)

 //onemore tak both exaple and mini hoisting seekhte h

// 1

addone(5)     //this doesnt give any error ,it will return the value
function addone(num){       //it is basically function
    return num+1              //
}


// 2
/*(5)  ///this will give error as it is declared function 
const addtwo = function(num){       //it is basically can be call expression  
    return num+2                     //only return not prints anything
}
*/    
//this is hoisting
 //***************************************************************************************************//











