const prompt=require("prompt-sync")();

// function showNumbers() {

//     let numbers =[0,1,2,3,4,5,6,7,8,9,10];
//     const evenNumbers = numbers.filter(num => num % 2 === 0);
//     const oddNumbers = numbers.filter(num => num % 2 !== 0);

//     console.log('evenNumbers ='+evenNumbers);
//     console.log('oddNumbers ='+oddNumbers);
// }
// showNumbers();

//ENTERING 5 USER AND ARRAY 
let users=[];

for(let i=0;i<5;i++)
{
    let newuser=prompt('user'+ (i+1)+':' );
    users.push(newuser);
}
do{
let index=prompt("Enter number 0-4: ");
if(index >=0 && index <=4){
    console.log("user",index,"is ",users[index]);
}else{
    console.log("Invalid input");
}
x=prompt("Want to continue: (yes/no)");
}while(x=="yes");
