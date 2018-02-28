const fizzbuzz = require("../src/fizzbuzz");

test.skip("1 should return number 1", function() {
  expect(fizzbuzz(1)).toEqual(1);
});

test("3 should return fizz", function() {
  expect(fizzbuzz(3)).toEqual("fizz");
});

test("5 should return buzz", function() {
  expect(fizzbuzz(5)).toEqual("buzz");
});

test("15 should return fizzbuzz", function() {
  expect(fizzbuzz(15)).toEqual("fizzbuzz");
});

test("Numbers that don't meet requirement should return input number", function() {
  expect(fizzbuzz(2)).toEqual(2);
});