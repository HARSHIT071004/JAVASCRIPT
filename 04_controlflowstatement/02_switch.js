
// switch (key) {
//     case value:
  //         break;          >>>>>>                 //it is basic syntax of switch


//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");      //this will print     >> if there nobreak then it will print everyvalue except the default case
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");   //if anything not runs
        break;
}