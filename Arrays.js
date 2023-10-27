
console.log("ARRAY EXCERCISE I")
var arr1 = [];
var arr2 =[1,2,3,4,5,6,7];
console.log(arr2.length);
firstitem=arr2[0];
console.log("First Item:", firstitem)
var middleIndex = Math.floor(arr2.length / 2);
var middleItem = arr2[middleIndex];
console.log("Middle Item:", middleItem);
var lastIndex = arr2.length - 1;
var lastItem = arr2[lastIndex];
console.log("Last Item:", lastItem);
var mixDataType=["fatima",7,"shaista",8,5,7.8,true,false];
console.log("length of mixDataType:",mixDataType.length);
var  itCompanies = ["Facebook", "Google", "Microsoft",
"Apple", "IBM", "Oracle" , "Amazon"];
console.log(itCompanies);
console.log("number of companies:",itCompanies.length);


firstitem=itCompanies[0];
console.log("First company:", firstitem)
var middleIndex = Math.floor(itCompanies.length / 2);
var middleItem = arr2[middleIndex];
console.log("Middle company:", middleItem);
var lastIndex = itCompanies.length - 1;
var lastItem = arr2[lastIndex];
console.log("Last company:", lastItem);
var Length = itCompanies.length;
for (var i = 0; i <Length; i++) {
console.log(itCompanies[i].toUpperCase());
}

var sentence = itCompanies.join(",");
console.log(sentence,"are big IT companies");
var company="Microsoft"
if(itCompanies.includes(company)){
    console.log(company,"found")
}
else{
    console.log("not found")
}
console.log("ARRAY EXERCISE II");
var shoppingCart = ["Milk","Coffee","Tea","Honey"]

shoppingCart.unshift("Meat");
shoppingCart.push("sugar")
console.log(shoppingCart)
shoppingCart.splice(4,1)
console.log(shoppingCart);
shoppingCart[3]="Green Tea"
console.log(shoppingCart)
 var countries = ["UK","pakistan","england","bangladesh"]
 console.log(countries)
 if(countries.includes("india")){
    console.log("INDIA")
 }
 else{
    countries.push("india")
    console.log(countries,"now india added in the list")
 }
 var frontend=["HTML","CSS","JS","REACT"];
 var backend=["","node","Express","MongoDB"];
 var fullstack = frontend+backend;
 console.log(fullstack)
 console.log("ARRAY EXERCISE III")
//  var ages =[19,22,19,24,20,25,26,24,25,24]
//  sort = ages.sort
//  var min = ages.min()
//  var max = ages.max()
//  var median =ages.middleItem()
//  console.log(ages)
//  console.log(sort)
//  console.log(min)
//  console.log(max)
//  console.log(median)
var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort(function(a, b) {
    return a - b;
});

// Find the minimum and maximum age
var minAge = ages[0];
var maxAge = ages[ages.length - 1];

// Find the median age
var middle = Math.floor(ages.length / 2);
var medianAge;
if (ages.length % 2 === 0) {
    // If the array has an even number of elements, take the average of the two middle values
    medianAge = (ages[middle - 1] + ages[middle]) / 2;
} else {
    // If the array has an odd number of elements, take the middle value
    medianAge = ages[middle];
}

// Find the average age
var sum = ages.reduce(function(total, age) {
    return total + age;
}, 0);
var averageAge = sum / ages.length;

// Find the range of ages
var range = maxAge - minAge;

// Compare (min - average) and (max - average)
var minAverageDiff = Math.abs(minAge - averageAge);
var maxAverageDiff = Math.abs(maxAge - averageAge);

// Output the results
console.log("Sorted Ages: " + ages);
console.log("Minimum Age: " + minAge);
console.log("Maximum Age: " + maxAge);
console.log("Median Age: " + medianAge);
console.log("Average Age: " + averageAge);
console.log("Range of Ages: " + range);
console.log("Absolute Difference (min - average): " + minAverageDiff);
console.log("Absolute Difference (max - average): " + maxAverageDiff);




