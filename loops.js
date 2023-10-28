

for(let i=1; i<=100; i++){
    if(i%2==0){
        let even=[i]
        console.log(even);
    }
}
for(let i=1; i<=100; i++){
    if(i%2!=0){
        let odd=[i]
        console.log(odd);
    }
}

var sum = 0;

for (var i = 0; i <= 100; i++) {
  
  sum += i;
}
console.log("The sum of all numbers from 0 to 100 is: " + sum);

 var sum1=0
 var sum2=0
for (var i = 0; i <= 100; i++) {
    if(i%2==0){
     sum1 += i;
    }
    else{
         sum2 += i;
        
    }
}
console.log("The sum of all even numbers from 0 to 100 is: " + sum1);
console.log("The sum of all odd numbers from 0 to 100 is: " + sum2);
var countries = ["ALBANIA"
,
"BOLIVIA"
,
"CANADA"
,
"DENMARK"
,
"ETHIOPIA"
,
"FINLAND"
,
"GERMANY"
,
"HUNGARY"
,
"IRELAND"
,
"JAPAN"
,
"KENYA"]

var countries = [
    "ALBANIA",
    "BOLIVIA",
    "CANADA",
    "DENMARK",
    "ETHIOPIA",
    "FINLAND",
    "GERMANY",
    "HUNGARY",
    "IRELAND",
    "JAPAN",
    "KENYA"
  ];
  
  
  for (var i = 0; i < countries.length; i++) {
    var countryName = countries[i];
    var length = countryName.length;
    countryLengths.push(length);
  }
  
  console.log(countryLengths);
  

