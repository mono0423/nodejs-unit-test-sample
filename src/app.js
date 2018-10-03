const fizzbuzz = require("./fizzbuzz");

const num = 20;

for (let i = 1; i <= num; i++) {
  if (fizzbuzz.checkFizzBuzz(i)) {
    console.log("fizzbuzz");
  } else if (fizzbuzz.checkFizz(i)) {
    console.log("fizz");
  } else if (fizzbuzz.checkBuzz(i)) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
