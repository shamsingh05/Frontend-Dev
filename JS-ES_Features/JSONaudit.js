"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];   // valid parsed objects (age converted to Number)
const errors = [];  // detailed error records

for (let i = 0; i < rawData.length; i++) {
  const lineNum = i + 1;
  const raw = rawData[i];

  try {
    // Put a breakpoint on the next line to watch each iteration in debugger:
    // debugger;

    // Attempt parse
    const parsed = JSON.parse(raw);

    // Validate required keys
    const hasUser = Object.prototype.hasOwnProperty.call(parsed, "user");
    const hasAge = Object.prototype.hasOwnProperty.call(parsed, "age");

    if (!hasUser || !hasAge) {
      throw {
        name: "MissingKeysError",
        message: `Missing required key(s): ${!hasUser ? "user " : ""}${!hasAge ? "age" : ""}`.trim(),
        parsed
      };
    }

    // Normalize/validate age
    const ageNum = Number(parsed.age);
    if (!Number.isFinite(ageNum) || ageNum < 0) {
      throw {
        name: "InvalidAgeError",
        message: `Invalid age value: ${parsed.age}`,
        parsed
      };
    }

    // If everything OK, push normalized object
    clean.push({
      user: String(parsed.user),
      age: ageNum
    });

  } catch (err) {
    // Determine error type and message
    let errRecord = {
      line: lineNum,
      raw,
      errorType: "UnknownError",
      message: ""
    };

    if (err instanceof SyntaxError) {
      errRecord.errorType = "InvalidJSON";
      errRecord.message = err.message;
    } else if (err && err.name === "MissingKeysError") {
      errRecord.errorType = "MissingKeys";
      errRecord.message = err.message;
      errRecord.parsed = err.parsed;
    } else if (err && err.name === "InvalidAgeError") {
      errRecord.errorType = "InvalidAge";
      errRecord.message = err.message;
      errRecord.parsed = err.parsed;
    } else {
      // fallback for unexpected thrown values
      errRecord.errorType = err && err.name ? err.name : "UnhandledError";
      errRecord.message = err && err.message ? err.message : String(err);
    }

    errors.push(errRecord);

    // Optional: set a breakpoint here to inspect `errRecord`, `raw`, `clean`, `errors`
    // debugger;
  }
}

// Final formatted report
console.log("=== PARSE SUMMARY ===\n");
console.log("Valid entries (clean):");
clean.forEach((e, idx) =>
  console.log(`${idx + 1}. user: ${e.user}, age: ${e.age}`)
);

console.log("\nErrors:");
errors.forEach(e =>
  console.log(`Line ${e.line}: [${e.errorType}] ${e.message} — raw: ${e.raw}`)
);

console.log(`\nTotals -> valid: ${clean.length}, invalid: ${errors.length}`);
