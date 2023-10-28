console.log("STRING EXCERCISE I");
let str= "Hello World"
// uppercase
let upper = str.toUpperCase()
let lower = str.toLowerCase()
console.log(upper);
console.log(lower);
// slice
let slicedStr = str.slice(0, 6) // from index 6 to 9 (not included)
console.log(slicedStr);
str2 ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(str2);
// split by comma and store in array
let arr = str2.split(',')
console.log(arr);
str3 = "javascript"
// position of the first occurrence of a
// in Javascript
let pos = str3.indexOf('a');
console.log("Position: "+pos);
// position of the last occurrence of a
// in Javascript
let pos1 = str3.lastIndexOf('a');
console.log("Last Position: "+pos1);
 let str4 = 'Javascript is used'
 let str5 ='to add functionalities to the web app'
 
//  concate string using concate method


 let con = str4.concat(' ',str5,'')
 console.log(con);
  let str6='This course is all about Javascript'
  // word incude or not
  if(str6.includes('Javascript')){
    console.log("Yes javascript included in the sentence");
  }
  else {
    console.log("No");
  }
//   Generate a random number between 0 and 100
// inclusively.
let random = Math.ceil(Math.random()*101)
console.log("random number between 0 and 100 :"+random);
// Generate a random number between 50 and 100
// inclusively.
let random1 = Math.floor((Math.random() * 51)) + 50;
console.log("random number between 50 and 100 :"+random1);
console.log("STRING EXCERCISE II");
// Use console.log() and escape characters to print following pattern 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125 using escape sequence
// use console

 
console.log('1 1 1 1 1');
console.log('2 1 2 4 8');
console.log('3 1 3 9 27');
console.log('4 1 4 16 64');
console.log('5 1 5 25 125');

// Extracting and calculating the total annual income
var text = 'He earns 50000 from salary per month, 10000 annual bonus.';
var salaryPerMonth = parseInt(text.match(/\d+/)[0]); // Extract salary per month
var annualBonus = parseInt(text.match(/\d+/g)[1]); // Extract annual bonus
var totalAnnualIncome = (salaryPerMonth * 12) + annualBonus;
console.log('Total Annual Income: ' + totalAnnualIncome);






