
function scuberGreetingForFeet(feetTraveled){
    if (feetTraveled <= 400) {
        return `This one is on me!`;
    } else if (feetTraveled > 2500) {
        return `No can do.`;
    }
    else if (feetTraveled > 2000) {
        return `I will gladly take your thirty bucks.`;
    } else {
        return `Please call our dispatcher`;
    }
}

function ternaryCheckCity(isCity){
    return ((isCity ==='NYC') ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tip){

  switch(tip) {
    case "generous":
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';  
  }
}

scuberGreetingForFeet(199);

ternaryCheckCity('NYC');

switchOnCharmFromTip('generous');
