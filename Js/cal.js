const prompt = require("prompt-sync")();
let Calculating = true;

while (Calculating) {
    // Get user input from the console
    const operation = prompt("Enter operation or type 'exit' to stop:");

    if (operation.toLowerCase() === "exit") {
        // Exit the loop if the user enters "exit"
        continueCalculating = false;
        break;
    }

    const num1 = parseFloat(prompt("Enter first number:"));
    const num2 = parseFloat(prompt("Enter second number:"));

    // Perform the calculation based on the operation
    let result;

    if (operation === "add") {
        result = num1 + num2;
        console.log(result);
    } else if (operation === "subtract") {
        result = num1 - num2;
        console.log(result);
    } else if (operation === "multiply") {
        result = num1 * num2;
        console.log(result);
    } else if (operation === "divide") {
        if (num2 !== 0) {
            result = num1 / num2;
            console.log(result);
        } else {
            result = "Cannot divide by zero";
            console.log(result);
        }
    } else {
        result = "Invalid operation";
        console.log(result);
    }
}