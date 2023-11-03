console.log("EXCERCISE OF MAP");
let  course = ["html","css","js"]

    let courseUpper = course.map(elem => 
        elem.toUpperCase())
        console.log(courseUpper);
         let number =[1,2,3,4,5,6]
         let square = number.map(elem => elem**2
    )
    console.log("square numbers from 1 to 6:",square);
//     You have an array of objects with products and
// their prices. Use the map function to create a new
// array containing the products' names only
// var ProductsDetails [{product1:"mobile";
//                         price1:10000};
// { product2:"watch"
// price2: 5000}]
let productDetails = [
    {
      "product": "mobile",
      "price": "20000",
    },
    {
        "product": "watch",
      "price": "8000",
     
    },
    {
        "product": "laptop",
      "price": "40000",
     
    },
    
  ]
  let productnames = productDetails.map(elem =>
    elem.product
    )
console.log(productnames);
// You have an array of temperatures in Celsius. Use
// the map function to convert each temperature to
// Fahrenheit using the formula (Celsius * 9/5) + 32.
let tempcelsius = [30,55,48,36]
let fahrenheit = tempcelsius.map(elem =>
    (elem*9/5)+32)
    console.log("celcius to fahrenheit:",fahrenheit);
//     You have an array of objects representing
// students with names and ages. Use the map
// function to create a new array of objects with the
// students' names and their year of birth. Assume
// the current year is 2023.
// eg: [ { name: "abc"
// , age: 25 }, { name: "xyz"
// , age:
// 19 }, { name: "efg"
// , age: 30 } ];
let studentDetails = [ { name: "uzma"
, age: 25 }, { name: "shaista", age: 22
}, { name: "fatima", age: 21 } ];
let stunameandyear = studentDetails.map(elem =>{
  let name=elem.name
  let year=2023-elem.age
return {name:name,
    year:year
}})
  console.log("students' names and their year of birth:",stunameandyear);
  console.log("EXCERCISE OF FILTER");
//   Use the filter to create a new array containing
// only even numbers.
 let num = [1,2,3,4,5,6,7,8,9]
 console.log(num);
let even = num.filter(elem =>
    elem%2==0)
    console.log("even numbers :",even);
//     Use filter to filter out countries having less than 6
// character
let countries =["india","pakistan","bangladesh","england","europe"]
let countriesSixChar = countries.filter(elem =>
    elem.length<6)
    console.log(countries);
    console.log(countriesSixChar);
    // Use filter to filter out country start with 'E';
 let countrieswithE = countries.filter(elem =>
    elem.startsWith("e"))
    console.log(" country start with 'E'",countrieswithE);      
    // Create a new array containing only products with
    // prices less than $10. Suppose you have an array of
    // objects representing products.
    const products = [
        { name: 'bag', price: '$8.99' },
        { name: 'books', price: '$12.99' },
        { name: 'pen', price: '$6.49' },
        { name: 'ring', price: '$9.99' },
        { name: 'shoes', price: '$15.99' }

      ];
      console.log(products);
      
      const cheapProducts = products.filter(product => parseFloat(product.price.replace('$', '')) < 10);
      
      console.log(" products with prices less than $10:",cheapProducts);

// You have an array of objects representing
// employees. Use the filter function to create a new
// array containing only employees who have a
// salary greater than or equal to $50,000.
const employees = [{ name: 'John Doe', salary: 50000},
{ name: 'uzma', salary: 40000},
{ name: 'shaista', salary: 60000},
{ name: 'fatima', salary: 70000}];
console.log(employees);
const highSalariedEmployees = employees.filter(employee => employee.salary >= 50000);
console.log("salary greater than or equal to $50,000:",highSalariedEmployees);
console.log("EXCERCISE OF REDUCE");

// Use the reduce function to calculate the sum of
// all numbers in the array. The out put should be in
// the array
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(arr);
let sum=arr.reduce((accumulator,currentValue)=> accumulator+ currentValue ,0 )
console.log(`The total is ${sum}`);

// You have an array of strings. Use the reduce
// function to concatenate all strings in the array
// into a single sentence.
let strArr = ['Readers','are','the','leaders'];
console.log(strArr);
let concatStr = strArr.reduce((accumulator, currentVal) => `${accumulator} ${currentVal}`);
console.log(`${concatStr}.`);

// You have an array of objects representing
// products with prices. Use the reduce function to
// calculate the total price of all products.
const productPrices = [
    {name:'book', price:200},
    {name:'pencils box', price:100},
    {name:'pens box', price:120},
    {name:'paper', price:10}
    ];
    console.log(productPrices);
    let totalPrice = productPrices.reduce((accumulator, obj) => accumulator + (obj.price), 0)
    console.log(`Total Price: ${totalPrice}`);


//     You have an array of transactions where each
// transaction is an object with a type ("debit" or
// "credit") and an amount. Use the reduce function
// to calculate the account balance. Debits reduce
// the balance, and credits increase it.
// [ { type: "debit"
// , amount: 50 }, { type: "credit"
// ,
// amount: 100 }, { type: "debit"
// , amount: 30 }, ]

const transactions = [
    { type: "debit", amount: 50 },
    { type: "credit", amount: 100 },
    { type: "debit", amount: 30 },
  ];
  console.log(transactions);
  const initialBalance = 0; // Starting with a balance of 0
  
  const accountBalance = transactions.reduce((balance, transaction) => {
    if (transaction.type === "debit") {
      // Reduce the balance for debits
      return balance - transaction.amount;
    } else if (transaction.type === "credit") {
      // Increase the balance for credits
      return balance + transaction.amount;
    }
    return balance;
  }, initialBalance);
  
  console.log("Account Balance:", accountBalance);
  


