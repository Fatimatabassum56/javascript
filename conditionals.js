console.log("CONDITIONALS EXERCISE I")
let a =5
let b=10

if(a>b){
    console.log("a is greater than b")

}
else{
    console.log("a is less than b")
}
// ternary operator
console.log("Ternary Operator:")

let z = (a> b) ? "a is greater than b" : "a is less than b";
console.log(z);
let  x= 2
if(x%2==0){
    console.log(x," is even");
}
else{
    console.log(x, "is odd");
}
let y = 9
if(y%2==0){
    console.log(y," is even");
}
else{
    console.log(y, "is odd");
}
var userAge = 12;

if (userAge >= 18) {
    console.log("You are old enough to drive.");
} else {
    var yearsToWait = 18 - userAge;
    console.log("You are left with " + yearsToWait + " years to drive.");
}


var largestNumber = Math.max(2, 4, 7);
console.log("The largest number is: " + largestNumber);

// Check if it's a working day or weekend using a switch statement
var day = "monday";

switch (day) {
    case "monday":
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(day,"Is a working day.");
        break;
    case 6:
    case 7:
        console.log("It's the weekend.");
        break;
    default:
        console.log("Invalid input. Please enter a number between 1 and 7 for the day of the week.");
}
console.log("CONDITIONALS EXCERCISE II")
const userRole = "user";
const action = "delete";
const userRole2="admin"
const action2 ="delete"

function checkPermission(userRole, action) {
    // Define the permissions object
    const permissions = {
        admin: ["create", "read", "update", "delete"],
        user: ["read", "update"],
        guest: []
    };

    // Check if the user has permission to perform the action
    if (permissions[userRole] && permissions[userRole].includes(action)) {
        return "Permission granted.";
    } else {
        return "Permission denied.";
    }
}


console.log(checkPermission(userRole, action));
console.log(checkPermission(userRole2, action2)); 

const productPrice = 60;
const productPrice2 = 90;
function calculateDiscountedPrice(productPrice) {
    let discountedPrice;
    
    

    if (productPrice >= 50) {
        // Apply a 10% discount
        discountedPrice = productPrice - (0.10 * productPrice);
    } else {
        discountedPrice = productPrice;
    }

    return "Final price: $" + discountedPrice.toFixed(2);
}


console.log(calculateDiscountedPrice(productPrice)); // Output: "Final price: $54.00"

console.log(calculateDiscountedPrice(productPrice2));