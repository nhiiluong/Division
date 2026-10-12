const { divide } = require("../src/calculator.js");

test("positiivinen: 6 / 3 = 2", () => {
  expect(divide(6, 3)).toBe(2);
});

test("negatiivinen: a ei ole numero", () => {
  expect(() => divide("6", 3)).toThrow(TypeError);
});

test("negatiivinen: b ei ole numero", () => {
  expect(() => divide(6, "3")).toThrow(TypeError);
});

test("negatiivinen: a on NaN", () => {
  expect(() => divide(NaN, 3)).toThrow(TypeError);
});

test("negatiivinen: jakaminen nollalla", () => {
  expect(() => divide(6, 0)).toThrow(RangeError);
});

