"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;

    case "subtract":
      return a - b;

    case "divide":
      if (b === 0) throw new Error("DivideByZeroError: Cannot divide by zero.");
      return a / b;

    case "power":
      return Math.pow(a, b);

    case "root":
      if (a < 0) throw new Error("NegativeRootError: Cannot take root of negative number.");
      return Math.sqrt(a);

    default:
      throw new Error(`InvalidOperationError: Operation '${op}' is not supported.`);
  }
}

let results = [];
let errors = [];

for (let op of operations) {
  try {
    const value = calculate(op, num1, num2);
    results.push({ operation: op, result: value });
  } catch (err) {
    errors.push({ operation: op, error: err.message });
  }
}

console.log("\n===== SUMMARY REPORT =====\n");

console.log("✔ Successful Operations:");
results.forEach(r => {
  console.log(`→ ${r.operation.toUpperCase()}: ${r.result}`);
});

console.log("\nFailed Operations:");
errors.forEach(e => {
  console.log(`${e.operation.toUpperCase()}: ${e.error}`);
});
