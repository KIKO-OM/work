const prompt = require("prompt-sync")();
let answer;

do {
  let num = parseInt(prompt("Enter number: "));
  // console.log("num1");
  // console.log("num2");
  // console.log("num3\n");
  1;
  let num1 = parseInt(prompt("Enter num1: "));
  let num2 = parseInt(prompt("Enter num2: "));
  let num3 = parseInt(prompt("Enter num3: "));

  if (num == 1) {
    if (num1 <= num2 && num2 <= num3) {
      console.log(num1, num2, num3);
    } else {
      console.log("Your number should be smaller to greater");
    }
  }
  if (num == 2) {
    if (num1 <= num2 && num2 <= num3) {
      console.log(num1, num2, num3);
    } else {
      console.log("Your number should be smaller to greater");
    }
  }

  if (num == 3) {
    if (num1 <= num2 && num2 <= num3) {
      console.log(num1, num2, num3);
    } else {
      console.log("Your number should be smaller to greater");
    }
  }

  answer = prompt("You want to use these service again? yes/no?");
} while (answer == "yes" || answer == "Yes");
