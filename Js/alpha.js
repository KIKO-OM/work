const prompt = require("prompt-sync")();

let Inputs = true;

while (Inputs) {
  let user = prompt("Enter any word:");

  let vowels = 0;
  let consonants = 0;

  for (let i = 0; i < user.length; i++) {
    let letter = user[i];
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      vowels++;
    } 
    else  {
      consonants++;
    }
  }

  console.log(`Vowels: ${vowels}`);
  console.log(`Consonants: ${consonants}`);

  let input = prompt("Do you want to input another word? (yes/no)");
  if (input !== 'yes') {
  Inputs = false;
  }
}

