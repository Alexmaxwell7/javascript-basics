// 1)// Array concat operation

// var arr1=["C","C++","Python"];  
// var arr2=["Java","JavaScript","Android"];  
// var result = arr1.concat(arr2);

// document.getElementById("demo").innerHTML = "Array concat result is" + result;  

// console.log("Array concat result", result);

// 2) conpywithin operation
// var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
// // place at 0th position, the element between 1st and 2nd position.  
// var result2=arr.copyWithin(0,1,4); 
// console.log("copywithin result", result2);

// let words = ["apple", "ball", "cat", "dog"];

// // copies element from index 0 to index 3 
// words.copyWithin(0, 2);

// // modifies the original array 
// console.log(words);

// 3)array entries
// var arr=['John','Michael','Embrose','Herry','Lewis'];  
// var itr=arr.entries();  
// document.write("After applying the entries method:"+"<br>");  

// for(var e of itr) //for loop using var.  
// {  
//     console.log(e+"</br>");  
// }  

//4) array join method

// var arr=["AngularJs","Node.js","JQuery"]  
// var result=arr.join('-');
// console.log("join result",result);

//5)array push pop shift unshift method
//push
// var arr=["AngularJS","Node.js"];  
// arr.push("Reactjs"); 
// arr.push("Jquery")
// console.log("push result", arr);
// //pop
// arr.pop();
// console.log("POP Result", arr);
// //shift
// arr.shift();
// console.log("shift result", arr);
// arr.unshift("Nextjs");
// console.log("unshift result", arr);

//6) array entries 
// defining an array named alphabets

// const name= {firstname:'abc',lastname:'bcd'}
// const alphabets = ["A", "B", "C"];

// // array iterator object that contains
// // key-value pairs for each index in the array
// let iterator = alphabets.entries();

// console.log("iterator", iterator);

// // iterating through key-value pairs in the array

// // for(let i =0 ;i < alphabets.length; i++){
// //     console.log("index",i);
// // }
// for (let name of iterator) {
//   console.log(name);
// }

// 7) array every method
// function checkState(state) {
//     return state == "TN";
// }

// const stateDetails = ["TN", "TN"];

// //checks if all the array elements
// // pass the checkAdult() function
// let check = stateDetails.every(checkState);

// console.log("StateDetails", check);

//8) array fill method

// const names = ["abc","bcd","efg"];

// const result = names.fill("hi");

// console.log("fill elements", result);

//9) array filter method
// let numbers = [20,40,18,10,15];

// // function to check even numbers
// function checkEven(number) {
//   if (number >= 18)
//     return console.log("Eligble for vote")
//   else
//     return console.log("not eligible");
// }

// // create a new array by filter even numbers from the numbers array
// let evenNumbers = numbers.filter(checkEven);
// console.log("find the even number",evenNumbers);

// const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000]

// function checkPrice(element) {
//   return element > 2000 && !Number.isNaN(element);
// }

// let filteredPrices = prices.filter(checkPrice);
// console.log(filteredPrices); // [ 3000, 5000, 8000 ]

// using arrow function
// let newPrices = prices.filter((price) => (price > 2000 && !Number.isNaN(price)));
// console.log(newPrices);

// function getDisplay(){

// }

// const a = 4;
// const b = 2;

// Traditional anonymous function (no parameters)
// (function () {
//   return console.log(a + b + 100)
// })();

// (a, b) => {
//     const chuck = 42;
//     return a + b + chuck;
//   }
// // Arrow function (no parameters)

// // function expressions
// const getRectArea = (width, height)=> {
//     return width * height;
//   };
  
//   console.log("react area is",getRectArea(3, 4));

// let numbers = [1, 3, 4, 9, 8];

// // function to check even number
// function isEven(element) {
//   return element % 2 != 0;
// }

// // get the first even number
// let evenNumber = numbers.find(isEven);
// console.log(evenNumber);

//10) findindex() method
// function that returns odd number
// function isOdd(element) {
//   return element % 2 !== 0;
// }

// // defining an array of integers
// let numbers = [2, 8, 6, 6, 4];

// // returns the index of the first odd number in the array
// let firstOdd = numbers.findIndex(isOdd);

// console.log("result",firstOdd);

//11) foreach methods
//  let numbers = [1, 3, 4, 9, 8];

// // function to compute square of each number
// function computeSquare(element) {
//   console.log(element * element);
// }

// // for (let i =0; i<numbers.length; i++){
// //   console.log("looping elements",i);
// // }


// // compute square root of each element
// numbers.forEach(computeSquare);


// let names = Array.from("saranya");
// console.log("Array from reuslt", names);

//12)include method 

// let flipkartList_items = ["laptop","mobile","pc"]

// let results = flipkartList_items.includes("abc");

// console.log("includes result is", results);


// if (results === true){
//   console.log("keep the item or delete the item")
// }
// else{
//   console.log("successfully added the item")
// }

//13)indexof 
// let languages = ["Java", "JavaScript", "Python", "java"];

// // get the index of the first occurrence of "JavaScript"
// let index = languages.indexOf("java ");
// console.log(index);

// Output: 1

// 14) array join method
// var info = ["Terence", 28, "Kathmandu"];

// var info_str = info.join("  ");

// // join() does not change the original array
// console.log(info); // [ 'Terence', 28, 'Kathmandu' ]

// // join() returns the string by joining with separator
// console.log(info_str); // Terence | 28 | Kathmandu

//16)array keys() method
// let alphabets = ["abc", "bcd", "ffff"];

// // returns an Array Iterator object that contains the keys
// let iterator = alphabets.keys();


// console.log("keys values", iterator);

// // looping through the Iterator object
// for (let key of iterator) {
//   console.log(key);
// }

// Output:
// 0
// 1
// 2

// let items = ["JavaScript", 1, "a", 3,788998,"lajfla",{name:"abc"}];


// const stringsresult = items.toString();

// console.log("tostring result", stringsresult);


//17)slice method
// let numbers = [2, 3, 5, 7, 11, 13, 17];

// // create another array by slicing numbers from index 1 to 4
// let newArray = numbers.slice(1, 5);
// console.log(newArray);

// let languages = ["JavaScript", "Python", "Java", "Lua"];

// let removed_items= languages.splice(1,2,"abc","bcd");

// console.log("removed result ", removed_items);
// console.log("final result", languages);


// Array map method.

// const string = "JavaScript";
// const stringArr = string.split(''); // array with individual string character

// const asciiArr = stringArr.map(x => x.charCodeAt(0));

// console.log("String array", stringArr);
// console.log("Ascii array", asciiArr);

const employees = [
    { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
    { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
    { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
    { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];

// calculate the net amount to be given to the employees

// const calcAmt = (obj) => {
//     // {name: "adam",salary:5000, bonus:500,tax:1000}
//     newObj = {};
//     // empty 1) name: "adam"
//     //calculation => 5000 + 500 -1000 = 4500
//     //newobj ={name:"adam",netEarning:4500},{name:"noah",netEarning:7000}
//     newObj.name = obj.name;
//     newObj.netEarning = obj.salary + obj.bonus - obj.tax;
//     return newObj;
// };

// // for(let i =0 ;i < employees.length; i++){
// //     console.log(i);
// // }

// let newArr = employees.map(calcAmt);
// console.log(newArr);


class Student{
    constructor(names,color,role){
        this.color = color;
        this.names = names;
        this.job = role
    }
    getValue(){
        return this.names
    }
    getRole(){
        return this.role
    }
}

let getaccess = new Student("abc","white","s/w developer");
const names = getaccess.getValue();
const getrole = getaccess.getRole();
console.log("getaccess", names);
window.Student = Student;






