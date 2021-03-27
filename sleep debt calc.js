const getSleepHours = day => {
  switch (day) {
    case('monday'):
      return 6
    break;
    case('tuesday'):
      return 7
    break;
    case('wednesday'):
      return 8
    break;
    case('thursday'):
      return 5
    break;
    case('friday'):
      return 8
    break;
    case('saturday'):
      return 7
    break;
    case('sunday'):
      return 6
    break;
    default:
      return 'Error!'
    break;
  }
}
 //console.log (getSleepHours("monday"));

 
const getActualSleepHours = () => 6 + 7 + 8 + 5 + 8 + 7 + 6 ;

const getIdealSleepHours = idealHours => idealHours * 7;


const calculateSleepDebt = () => {
  const  actualSleepHours = getActualSleepHours();
  const  idealSleepHours = getIdealSleepHours(5);
  if (actualSleepHours === idealSleepHours) {
      console.log ( "You got the perfect amount of sleep hours.")
    } else if (actualSleepHours > idealSleepHours) {
      console.log ('You had ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than what you needed!');
    } else if (actualSleepHours < idealSleepHours) {
        console.log ("You should get some rest because you slept " + (idealSleepHours - actualSleepHours) + " hours less than you needed.");
    }
    else { 
      console.log ("Something went wrong!");
    }
  }
 calculateSleepDebt ();