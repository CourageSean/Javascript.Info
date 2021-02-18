// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

let age;
function checkAge(age) {
  age > 18 ? true : confirm("Did parents allow you?");
}

function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}

// Write a function min(a,b) which returns the least of two numbers a and b.
let minn;

function min(a, b) {
  a >= b ? (a > b ? (minn = b) : console.log("a = b")) : (minn = a);
  return minn;
}

console.log(min(4, 4));

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
let result;
function powerN(x, n) {
  for (let i = 1; i < n + 1; i++) {
    result = x ** i;
  }
  console.log(result);
}

powerN(2, 4);
