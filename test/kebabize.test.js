const kebabize = require("../src/kebabize");

test("hiThere should be kebabized to hi-there", function() {
  expect(kebabize("hiThere")).toEqual("hi-there");
});

test("hiThereBruceWayne shuld be kebabized to hi-there-bruce-wayne", function() {
  expect(kebabize("hiThereBruceWayne")).toEqual("hi-there-bruce-wayne");
});

// write additional tests to ensure kebabize() works as expected
test("myNameISJoe shuld be kebabized to my-name-i-s-joe", function() {
  expect(kebabize("myNameISJoe")).toEqual("my-name-i-s-joe");
});