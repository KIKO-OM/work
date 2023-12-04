const prompt = require("prompt-sync")();
let Input = true;

let A = console.log("Grade A:100-90");
let B = console.log("Grade B:90-80");
let C = console.log("Grade C:80-70");
let D = console.log("Grade D:70-50");
let E = console.log("Grade E:50-0");

while (Input) {
  let marks = prompt("Enter your marks:");
 
  if (marks !== null && marks !== "") {
    if (marks >= 90 && marks <= 100) {
      console.log("Grade A");
    } else if (marks >= 80 && marks < 90) {
      console.log("Grade B");
    } else if (marks >= 70 && marks < 80) {
      console.log("Grade C");
    } else if (marks >= 50 && marks < 70) {
      console.log("Grade D");
    } else if (marks < 50 && marks >= 0) {
      console.log("Grade E");
    } else {
      console.log("Marks should be between 0 and 100");
    }

    let userInput = prompt("Do you want to continue? (yes/no)");

    if (userInput.toLowerCase() !== "yes") {
      Input = false;
      console.log("Closing");
    }
  } 
}
