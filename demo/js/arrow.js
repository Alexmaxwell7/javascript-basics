// var namess = "abd"
// const names = function(firstname,lastname){
//     return console.log("your name is" ,firstname+lastname);
// }

// names("john","william");

// (function(num1,num2){return console.log(num1+num2)})(10,20);


// (firstname)=>console.log("Your names is",firstname + namess)

// result("maxs")
//step 1)=> a = 200
//step 2)=> b=10 
//step 3)=> return 200*10=> 200
// function multiply(a, b = 10) {
//     return console.log("default parameters result is",a * b)
//   }

//   multiply(10,20);
//   multiply(200);

// const spreadarray1 = ["apple","orange","banana","goa"]
// const spreadarray2 = [...spreadarray1,"grapes"]

// const copyarray = [...spreadarray2]

// console.log("spreadArray", spreadarray1);
// console.log("using spreadoperator",spreadarray2);
// console.log("copy array",copyarray);


// const restOperator = (...copyarray) => {

//     console.log("restoperator", copyarray);
    
// }

// restOperator("apple","orange","grapes");

// function sum(x, y ,z,a) {
//     console.log("restoperator result",x + y + z +a);
// }

// const num1 = [10, 20, 8, 50];

// sum(...num1);

//step 1)=> 10 20 8 50

//step 2)=>10,20,8 because they called only 3 args.

// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female',
//     address: 'TN'
// }

// let {name,age,gender,address}= person

// console.log("name",address);

// const arrValue = ['one', 'two', 'three'];

// const [x,y,z]=arrValue

// console.log(x);

const arrValue = ['saranya', 'TEN', 'TN', 'IN'];

const [name,dist,state,country]=arrValue

console.log("country", country);



