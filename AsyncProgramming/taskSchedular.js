console.log("Start");

// Macrotask: setTimeout → goes to macrotask queue
setTimeout(() => {
  console.log("setTimeout callback (Macrotask)");
}, 0);

// Microtask: Promise.then → goes to microtask queue
Promise.resolve().then(() => {
  console.log("Promise.then callback (Microtask)");
});

console.log("Synchronous Log");

console.log("End");

