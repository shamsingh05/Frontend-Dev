
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14",null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
  let value = apiData[i];
  let num = Number(value);
  let bool = Boolean(value);
  let str = String(value);

  console.log(`Value: ${value}`);
  console.log(`→ Number: ${num}`);
  console.log(`→ Boolean: ${bool}`);
  console.log(`→ String: "${str}"`);

  // Check for invalid number conversions
  if (isNaN(num) || value === " " || typeof value === "undefined") {
    invalidNumbers.push(value);
    console.log("Invalid Number detected.\n");
  } else {
    validNumbers.push(num);
    console.log("Valid Number added.\n");
  }
}

console.log("=== Summary ===");
console.log("Valid Numbers:", validNumbers);
console.log("Invalid Numbers:", invalidNumbers);

