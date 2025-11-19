let x = 16.75;

let rounded = Math.round(x);
let squareRoot = Math.sqrt(x);
let power = Math.pow(x, 3);
let randomInRange = Math.floor(Math.random() * 41) + 10; 

console.log(`Original Number: ${x} , 
Rounded Value: ${rounded} , 
Square Root: ${squareRoot.toFixed(4)} ,
${x} raised to the power 3: ${power.toFixed(2)} , 
Random number between 10 and 50: ${randomInRange}
`);
