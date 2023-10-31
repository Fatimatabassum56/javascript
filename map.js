console.log("EXCERCISE OF MAP");
let  course = ["html","css","js"]

    let courseUpper = course.map(elem => 
        elem.toUpperCase())
        console.log(courseUpper);
         let number =[1,2,3,4,5,6]
         let square = number.map(elem => elem**2
    )
    console.log(square);
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
    console.log(fahrenheit);
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
}, { name: "fatima", age: 30 } ];
let stunameandyear = studentDetails.map(elem =>{
  let name=elem.name
  let year=2023-elem.age
return {name:name,
    age:year
}})
  console.log(stunameandyear);
  console.log("EXCERCISE OF FILTER");
//   Use the filter to create a new array containing
// only even numbers.
 let num = [1,2,3,4,5,6,7,8,9]
let even = num.filter(elem =>
    elem%2==0)
    console.log(even);
//     Use filter to filter out countries having less than 6
// character
let countries =["india","pakistan","bangladesh","england","europe"]
let countriesSixChar = countries.filter(elem =>
    elem.length<6)
    console.log(countriesSixChar);
    // Use filter to filter out country start with 'E';
 let countrieswithE = countries.filter(elem =>
    elem.startsWith("e"))
    console.log(countrieswithE);      
    // Create a new array containing only products with
    // prices less than $10. Suppose you have an array of
    // objects representing products.
    
    let products10$ = productDetails.filter(elem =>
        elem.price<10)
        return 
        console.log(products10$);

    
