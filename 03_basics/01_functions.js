function myname (){
console.log("h");
console.log("a");
console.log("r");
console.log("s");
console.log("h");
}

myname()  //this is used to call function

function addnumbers(a,b){     //this is parameter
    console.log(a+b);
}
addnumbers(4,6)  //this is argument>>>>>>>>>>>>>>> diffrent output for different parameter

function addnumber(number1,number2){
    let results =number1+number2
    return results
    console.log("harsh");   //this is unreachable code
}

function logindetails(usernames){      //yu can also give username="sam ">>>>>>which is basically default value>>>>>>if there is no value print then this default value will print
    if(username===undefined){          //if(!username) >> this is same
        console.log("please enter a name");
        return    //this will not let go the pointer to below return value
    }
    return '${usernames}just logged in'

}
console.log(loginusermessage("harshit"))   //here value is passed but if value is not passed thn it prints undefined

function  calculatecart(...num1){     //also (val1,val2,...num1)
    return num1
}
console.log(calculatecart(200,400,5,5,5,55,5,5,5,))   //due to this ... we can print as mny we want>> [this will print array ]

const cust={
    usern:"har",
    pric:33
}
function handlobject(anyobject){
    console.log('usern is ${anyobject.usen} and price is ${anyobject.pric}');
}
handlobject(cust)   //this will print in a simple way 

// in array  we can in below given way
const newarray =[200,400,100,600]
function  returnsecondvalue(getArray){
    return getarray[1]
}
console.log(returnsecondvalue(newarray));    //it will print 400
console.log(returnsecondvalue([200,400,100,600]));   //this will also print 400



//****************************************************end****************************** */


