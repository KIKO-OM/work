const prompt = require("prompt-sync")();
//parameter

// function add(a=1,b=4){

// let sum = a+b;
// return sum;
//}
//console.log(add(5,3)); //output=8
//console.log(add(3)); //output=7
//console.log(add(5,undefined)); //output=9
//console.log(add(5,null)); //output=5
//console.log(add()); //output=5


function plan(name, age){
  return "hello" +name+ '\nage:' +age;
}
let name = " Kinley";
let age = 21;
console.log(plan(name,age));


//EXPLECIT
// Function to calculate the area of a rectangle
// function calculateArea(length, width) {
//     return length * width;
//   }
  
//   // Function to calculate the perimeter of a rectangle
//   function calculatePerimeter(length, width) {
//     return 2 * (length + width);
//   }
  
//   // Given dimensions of a rectangle
//   let rectangleLength = 5;
//   let rectangleWidth = 10;
  
//   // Calculate area and perimeter using the functions
//   let area = calculateArea(rectangleLength, rectangleWidth);
//   let perimeter = calculatePerimeter(rectangleLength, rectangleWidth);
  
//   // Output the results
//   console.log("Rectangle Area:", area); // Output: Rectangle Area: 50
//   console.log("Rectangle Perimeter:", perimeter); // Output: Rectangle Perimeter: 30
  