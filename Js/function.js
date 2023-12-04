const prompt = require("prompt-sync")();

//define a function name 'greet'
//function greet(){
  //  return('Hello');
//}

//call the'greet' function
//greet();


//simple declaration function
// let a, b, results; //global variables

// a = parseInt(prompt("Enter 1st number: "));
// a = parseInt(prompt("Enter 2st number: "));

// function add(){
//     results = a + b;
//     console.log("1st number + 2nd number: " + results);
// }
// function sub(){
//     results = a - b;
//     console.log("1st number - 2nd number: " + results);
// }
// add();
// sub();

//function plan(){
//plan function
//return "hello"; //return will pass the value
//}
console.log(plan()); //parameter it will put outsite

function plan(name, age){
    return "hello"+" "+name+ '\nage:' +age;
}
let name = "Kinley";
let age = 24;
console.log(plan(name,age));