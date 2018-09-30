var target = require("../src/fizzbuzz");
var assert = require("assert");


describe("fizzbuzz", function() {
  describe("checkFizz()", function() {
    it("3で割り切れる場合、trueを返す", function() {
      assert.equal(true, target.checkFizz(3));
    });
  });
});

describe("fizzbuzz", function() {
  describe("checkFizz()", function() {
    it("3で割り切れない場合、falseを返す", function() {
      assert.equal(false, target.checkFizz(4));
    });
  });
});

describe("fizzbuzz", function() {
  describe("checkBuzz()", function() {
    it("5で割り切れる場合、trueを返す", function() {
      assert.equal(true, target.checkBuzz(5));
    });
  });
});

describe("fizzbuzz", function() {
  describe("checkBuzz()", function() {
    it("5で割り切れない場合、falseを返す", function() {
      assert.equal(false, target.checkBuzz(6));
    });
  });
});

describe("fizzbuzz", function () {
    describe("checkFizzBuzz()", function () {
        it("15で割り切れる場合、trueを返す", function () {
            assert.equal(true, target.checkBuzz(15));
        });
    });
});

describe("fizzbuzz", function () {
    describe("checkFizzBuzz()", function () {
        it("15で割り切れない場合、falseを返す", function () {
            assert.equal(false, target.checkFizz(16));
        });
    });
});