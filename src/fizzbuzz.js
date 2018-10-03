module.exports = {
  main: () => {
    const num = 20;

    for (let i = 1; i <= num; i++) {
      if (module.exports.checkFizzBuzz(i)) {
        console.log("fizzbuzz");
      } else if (module.exports.checkFizz(i)) {
        console.log("fizz");
      } else if (module.exports.checkBuzz(i)) {
        console.log("buzz");
      } else {
        console.log(i);
      }
    }
  },
  checkFizz: num => {
    return num % 3 == 0;
  },
  checkBuzz: num => {
    return num % 5 == 0;
  },
  checkFizzBuzz: num => {
    return num % 15 == 0;
  }
};