//Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

let answer = prompt(" What is the “official” name of JavaScript?");

if (answer == "ECMAScript") {
  alert("Right!");
} else {
  alert("Wrong!");
}

//Using if..else, write the code which gets a number via prompt and then shows in alert:

//1, if the value is greater than zero,
//-1, if less than zero,
//0, if equals zero.

let value = prompt("type in a number.");

if (value == 0) {
  alert("0");
} else if (value > 0) {
  alert("1");
} else {
  alert("-1");
}

//Rewrite this if using the conditional operator '?':

//let result;

//if (a + b < 4) {
// result = 'Below';
//} else {
//result = 'Over';
//}

let result = a + b < 4 ? "Below" : "Over";

// Rewrite if..else using multiple ternary operators '?'.

//For readability, it’s recommended to split the code into multiple lines.

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// if the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

let userName = prompt("Who's there?", "");

if (userName === "Admin") {
  let pass = prompt("Password?", "");

  if (pass === "TheMaster") {
    alert("Welcome!");
  } else if (pass === "" || pass === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName === "" || userName === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
