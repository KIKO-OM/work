const prompt = require("prompt-sync")();
const users = {};

let choice;
do {
    console.log("Log-in or register");
    choice = prompt(' ');

    if (choice === 'register') {
        register(); 
    } else if (choice === 'login') {
        login(); 
    } else {
        console.log('Invalid choice. Please enter "login" or "register".');
    }

    let y = prompt('Want to use this service again (yes/no): ');
    console.log(' ');

    if ( y !== 'yes') {
        break;
    }
} while (true);

function register() {
    const username = prompt("Username:");
    const password = prompt("Password:");

    if (users[username] !== undefined) {
        console.log("User already exists. Please choose a different username.");
    } else {
        users[username] = password;
        console.log("Registration successful!");
    }
}

function login() {
    const username = prompt("Username:");
    const password = prompt("Password:");

    if (users[username] === undefined) {
        console.log("User not found. Please register first.");
    } else {
        if (users[username] === password) {
            console.log("Login successful!");
        } else {
            console.log("Incorrect password. Please try again.");
        }
    }
}
