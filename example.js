// let greet = function(name) {
//     return `Hello, ${name}!` ;
// }
// console.log(greet("Alice"));
// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 3));
// let multiply =function (a, b) {
//     return a * b;
// }   
// console.log(multiply(4, 3));
// let divide = (a, b) => {
//     if (b === 0) {
//         return "Error: Division by zero";
//     }
//     return a / b;
// }
// console.log(divide(10, 2));

//================
function sub(a, b) {
    console.log(a - b);
}
function add(a, b,sub) {
    sub(a, b);
    return a + b;
    
}
console.log(add(5, 3,sub));

let printMessage = function(message) {
    console.log(message);
}
const id = setInterval(() => {
    printMessage("Hello, World!");
}, 1000);
//  () => {
//     printMessage("This is an IIFE!");
// })
   
setTimeout(() => {
    clearInterval(id);
    printMessage("Interval cleared after 5 seconds.");
}, 5000);


let userDetails = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};
console.log(userDetails);
let arr = [1,2,3,4,5];
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 
const filteredArr = arr.filter(num => num % 2 === 0);
console.log(filteredArr); 
const mappedArr = arr.map(num => num * 2);
console.log(mappedArr);
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);    
let numbers2 = [...numbers, 6, 7, 8];
console.log(numbers2); 
let person = {
    name: "Jane Doe",
    age: 25,
    email: "jane.doe@example.com"
};
console.log(person);

let numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let addedNumbers = numArray.map(num => num + 1);
console.log(addedNumbers);
let evenNumbers = numArray.filter(num => num % 5 === 0);
console.log(evenNumbers); 
let multiplier = numArray.reduce((a,e) => a*e,1);
console.log(multiplier);
