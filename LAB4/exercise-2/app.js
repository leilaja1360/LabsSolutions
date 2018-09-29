const say = require('say');


say.speak('Hello!');
say.stop();
say.speak("Hello?", 'Alex', 0.5);
function sorryDave() {              //this is a callback to call "im sorry dave (step 7)"
    say.speak('I’m sorry, Dave');
}
setTimeout(sorryDave,5000);         //this line run after 5000 milliseconds or 5 second then call sorryDave function(step 8)