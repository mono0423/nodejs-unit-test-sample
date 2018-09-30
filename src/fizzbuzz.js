const fizzbuzz = {};

fizzbuzz.main = () => {
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
};

fizzbuzz.checkFizz = num => {
  return num % 3 == 0;
};

fizzbuzz.checkBuzz = num => {
  return num % 5 == 0;
};

fizzbuzz.checkFizzBuzz = num => {
  return num % 15 == 0;
};

fizzbuzz.main();

module.exports = fizzbuzz;
