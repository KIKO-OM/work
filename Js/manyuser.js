const prompt = require("prompt-sync")();
const users = [];
let userCount = 0;

const MAX_USERS = [3];

let choice;
do {
    console.log("---Registration---");

    console.log("Log-in or sign up");
    choice = prompt(' ');

    if (choice === 'signup') {
        if (userCount < MAX_USERS) {
            signUp();
            userCount++;
        } else { 
            console.log("Only 3 users. Cannot sign up more users.");
        }
    } else if (choice === 'login') {
        login();
    } else {
        console.log('Invalid choice.');
    }

    let you = prompt('Want to use this service again (yes/no): ');
    console.log(' ');

    if (you !== 'yes') {
        break;
    }
} while (true);

function signUp() {
    const username = prompt("Username:");
    const password = prompt("Password:");

    if (users[username] !== undefined) {
        console.log("User already exists. Please choose a different username.");
    } else {
        users[username] = password;
        console.log("Sign-up successful!");
    }
}

function login() {
    const username = prompt("Username:");
    const password = prompt("Password:");

    if (users[username] === undefined) {
        console.log("User not found. Please sign up first.");
    } else {
        if (users[username] === password) {
            console.log("Login successful!");
        } else {
            console.log("Incorrect password. Please try again.");
        }
    }
} 