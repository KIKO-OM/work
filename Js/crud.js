const prompt = require("prompt-sync")();

const employees = [];
let choose;

do{
console.log("\n----------EMPLOYEE MANAGEMENT SYSTEM----------\n");
console.log("\t     ---EMPLOYEE LIST---\t\t\n");

console.log("EMPLOYEE NAME\t\tEMPLOYEE ID\t\tDATE\n");

  console.log("\n1: ADD EMPLOYEE");
  console.log("2: REMOVE EMPLOYEE");
  console.log("3: UPDATE EMPLOYEE");

  const userInput = prompt('\nCHOOSE FROM 1-3: ');
  let message = ' ';

  switch (userInput) {
    case '1':
        const name = prompt('ENTER NAME: ');
        const date = prompt('ENTER DATE: ');
        const newEmployee = { name, id: employees.length + 1, date };
        employees.push(newEmployee);
        
        message = `\nEMPLOYEE ADDED SUCCESSFULLY\n`;
        break;
    case '2':
      const removeId = prompt('ENTER ID: ');
const employeeToRemoveIndex = employees.findIndex(emp => emp.id == removeId);

if (employeeToRemoveIndex !== -1) {
  employees.splice(employeeToRemoveIndex, 1);
  message = `\nEMPLOYEE REMOVED SUCCESSFULLY.\n`;
   
  for (let i = employeeToRemoveIndex; i < employees.length; i++) {
    employees[i].id = i + 1;
  }
} else {
  message = 'ID NOT FOUND.';
}
      break;
    case '3':
      const updateId = prompt('ENTER ID: ');
      const employeeToUpdate = employees.find(emp => emp.id == updateId);
      if (employeeToUpdate) {
        const newName = prompt('ENTER NEW NAME: ');
        const newDate = prompt('ENTER NEW DATE: ');
        employeeToUpdate.name = newName;
        employeeToUpdate.date = newDate;
        message = `\nEMPLOYEE UPDETED SUCCESSFULLY.\n`;
      } else {
        message = 'ID NOT FOUND.';
      }
      break;
    default:
      message = `\nINVALID OPTION: CHOOSE FROM 1-3.`;
  }

  console.log("\nEMPLOYEE NAME:\t\t EMPLOYEE ID:\t\tDATE:\t\t");
  employees.forEach(emp => {
    console.log(`${emp.name}\t\t\t ${emp.id}\t\t\t${emp.date}\t\t`);
  });

  console.log(message);

  const continueInput = prompt('DO YOU WANT TO CONTINUE? (yes/no)');
  choose = continueInput === 'yes';
} while (choose);




