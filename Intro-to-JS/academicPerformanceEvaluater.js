let marks = [88, 76, 91, 84, 67];   // 5 subjects

let total = 0;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

let average = total / marks.length;
let percentage = (total / 500) * 100;

console.log("Average Marks:", average.toFixed(2));
console.log("Overall Percentage:", percentage.toFixed(2) + "%");

if (percentage >= 85) {
    console.log("Promoted with Distinction");
} 
else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
} 
else {
    console.log("Detained");
}
