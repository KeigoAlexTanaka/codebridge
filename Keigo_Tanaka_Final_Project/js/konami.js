// character values for each keypress
var keyMap = {
  13: 'enter',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// password for activating konami code
var pw = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a','enter'];
//index for the password
var konamiIndex = 0;

// ES6
// will check each keypress to see if it matches the konami code
document.addEventListener('keydown', (k)=> {
  var userKey = keyMap[k.keyCode];
  var pwKey = pw[konamiIndex];
// for each keypress that is correct it will increment the index  
  if (userKey == pwKey) {
    konamiIndex++;
// if user activates konami code video will display
    if (konamiIndex == pw.length) {
      displayVideo();
      konamiIndex = 0;
    }
  } 
// if the keypress is incorrect the index will reset
  else {
    konamiIndex = 0;
  }
});

// ES5
// document.addEventListener('keydown', function(k) {
//   var userKey = keyMap[k.keyCode];
//   var pwKey = pw[konamiIndex];
//   if (userKey == pwKey) {
//     konamiIndex++;
//     if (konamiIndex == pw.length) {
//       displayVideo();
//       konamiIndex = 0;
//     }
//   } 
//   else {
//     konamiIndex = 0;
//   }
// });

const displayVideo=()=>{
  document.getElementById("keigo").style.display="block";
}