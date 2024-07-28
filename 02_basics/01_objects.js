// objcts singleton and constructor

const tinderuser = new Object()    //<< sigleton object
// you can also declare in below way
// const tinderuser = {}    >> this is non singleton object

tinderuser.id ="123abc"
tinderuser.name="sammy"
tinderuser.isLoggedIn=false
//  this will come in a way {key value pairs}
console.log(tinderuser);

const regularuser={
    email: "some@gmail.com",
    fulllname:{
        userfullname:{
            firstname: "harshit",    //it is basically objects in objects
            lastname :"sharma"
        }
    }
}
console.log(regularuser.fulllname);  //full object is stored here
console.log(regularuser.fulllname.userfullname); //go in depth

const obj1={1:"a",2:"n"}
const obj2={3:"h",4:"l"}

// const obj3={obj1,obj2}  >>try below method>>>>>>>>>//{obj1:{},obj2:{}}   >> this is output
const obj3= Object.assign({},obj1,obj2)  //here empty braces is for make it main array and making other surce foe that if it is not in that way than it will store in obj
console.log(obj3);    
// here it is basically more precise way of do that is given below
const obj4={...obj1, ...obj2};    //it is the good way
console.log(obj4);


const obj5=[
    {   id:1,
        email:"har@gmail.com"
},
{                            
    id:1,
    email:"har@gmail.com"       //in object many arrays separated value
},
{
    id:1,
    email:"har@gmail.com"
}
]

obj5[1].email    //it is used to access any this arrays
console.log(tinderuser);
console.log(Objects.keys(tinderuser));  //it print all keys in arrays
console.log(Objects.values(tinderuser));
console.log(Objects.entries(tinderuser));   //it will change separate arrays in arrays in key value pair

console.log(tinderuser.hasOwnProperty('isLoggedIn'));    //true


// go to console for more knowledge and print const obj=    >>>>>>>print in this way
  
// DE-STRUCTURED CODE

const course ={
    coursename: "js hindi",
    price:"999",
    courseinstructor:"harsh"
}
// course.courseinstructor

const {courseinstructor} = course    //you can also rename it as>>>>>>>> (courseinstructor: instruct )
console.log(courseinstructor);

// JSON
/*
{
    "name":"harshit",            //this is correcet but showng aise hi wrong
    "class":"btech"
}
*/

















