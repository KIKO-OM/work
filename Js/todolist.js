const prompt = require("prompt-sync")();

const activity = {
    'wake up': '6:00 AM',
    'breakfast': '7:30 AM',
    'reach class': '8:45 AM',
    'class starts': '9:00 AM',
    'first break': '10:30 AM',
    'lunch break': '1:00 PM',
    'second break': '3:30 PM',
    'classes end': '5:00 PM',
    'reach home': '5:45 PM',
    'dinner': '8:00 PM',
    'study': '8:30 PM',
    'sleep': '10:30 PM'
  };
  
  let Routine;
  let user;
  do {
    const userInput = prompt('Enter an activity:');
    let message;
  
    switch (user) {
      case 'wake up':
      case 'breakfast':
      case 'reach class':
      case 'class starts':
      case 'first break':
      case 'lunch break':
      case 'second break':
      case 'classes end':
      case 'reach home':
      case 'dinner':
      case 'study':
      case 'sleep':
        message = `Time: ${activity[user]}`;
        break;
      default:
        message = `Activity '${user}' not found in the schedule.`;
    }
  
    console.log(message);
  
    const Inputs = prompt('Do you want to continue? (yes/no)').toLowerCase();
    Routine = Inputs === 'yes';
  } while (Routine);
