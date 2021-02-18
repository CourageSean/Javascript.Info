//Write the code using if..else which would correspond to the following switch:
/* switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
} */
let browser = "Chrome";

if (browser === "Edge") {
  alert("You've got the Edge!");
} else if (browser === "Chrome") {
  alert("Okay we support these browsers too");
} else if (browser === "Firefox") {
  alert("Okay we support these browsers too");
} else if (browser === "Safari") {
  alert("Okay we support these browsers too");
} else if (browser === "Opera") {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

// Rewrite the code below using a single switch statement:
/* 
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) c
  alert( '2,3' );
}
*/

let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);

    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
  default:
    alert("well, well");
}
