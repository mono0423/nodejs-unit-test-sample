module.exports = {
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