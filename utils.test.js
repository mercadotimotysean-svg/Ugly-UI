// tests/utils.test.js

// Example function to test
function add(a, b) {
  return a + b;
}

// ✅ Passing test
test("adds numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

// ✅ Fixed test
test("adds numbers correctly with 2 + 2", () => {
  expect(add(2, 2)).toBe(4);
});

