

"use strict";

function generatePatternLet(limit = 5) {
  const lines = [];
  for (let i = 1; i <= limit; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    lines.push(row.trim());
  }
  return lines.join("\n");
}

console.log(generatePatternLet()); // default 5


