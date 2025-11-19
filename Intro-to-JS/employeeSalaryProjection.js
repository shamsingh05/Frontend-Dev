

let currentSalary = 45000;     // monthly salary
let incrementRate = 8;         // 8% yearly increment

let yearlyData = [];

let salary = currentSalary;

for (let year = 1; year <= 5; year++) {

    salary += salary * (incrementRate / 100);   // using += assignment operator
    let roundedSalary = Math.round(salary);     // rounding

    yearlyData.push({
        Year: "Year " + year,
        Salary: roundedSalary
    });
}

console.table(yearlyData);
