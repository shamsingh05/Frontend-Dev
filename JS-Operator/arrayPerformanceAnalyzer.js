
let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30); 

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

let passedCount = scores.filter(score => score >= 50).length;

// Step 3: Display formatted output
console.log(`Scores: ${scores.join(", ")}
Highest Score: ${highest}
Lowest Score: ${lowest}
Average Score: ${average.toFixed(2)}
Students Passed (≥ 50): ${passedCount}
`);
