const prompt = require("prompt-sync")();

// word=prompt('Enter any word: ')
// vowels =0;
// consonants=0;


// for(let i=0; i<word.length;i++)
// {
//   if(word[i]==='a' ||word[i]==='e' ||word[i]==='i' ||word[i]==='o' ||word[i]==='u')
//   {
//     vowels++;
//   } 
// else if(word[i]>='a' && word[i]<='z')
// {
//   consonants++;
// }
// }
// console.log('Vowels:'+vowels);
// console.log('consonants:'+consonants);
// console.log(' ')


word=prompt('Enter any word: ')
vowels =0;
consonants=0;
let word;

while(word){
for(let i=0; i<word.length;i++)
{
  if(word[i] =='a' ||word[i] =='e' ||word[i] =='i' ||word[i] =='o' ||word[i] =='u')
  {
    vowels++;
  } 
// else if(word[i] !='a' ||word[i] !='e' ||word[i] !='i' ||word[i] !='o' ||word[i] !='u')
// {
//   consonants++;
// }
else{
    consonants++; 
}

console.log('Vowels:'+vowels);
console.log('consonants:'+consonants);
console.log(' ');
}
}
let input = prompt("Do you want to input another word? (yes/no)");
if (input !== 'yes') {
Inputs = false;
}


