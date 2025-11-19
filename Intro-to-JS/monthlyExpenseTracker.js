


let expenses = [5000, 1200, 8000, 2500, 1500];  
// food, travel, rent, bills, leisure

let total = 0;


for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];     
}

let average = total / expenses.length;

// Add 10% tax using arithmetic + assignment operator
let tax = total * 0.10;
total += tax;

// Display results (rounded)
console.log("Total Expenses After Tax: ₹" + total.toFixed(2));
console.log("Average Monthly Expense: ₹" + average.toFixed(2));
console.log("Tax Amount Added: ₹" + tax.toFixed(2));
