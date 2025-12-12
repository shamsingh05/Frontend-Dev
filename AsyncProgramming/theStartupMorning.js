// Step 1: Boil Water
function boilWater() {
  return new Promise((resolve, reject) => {
    console.log("Boiling water...");
    setTimeout(() => {
      if (Math.random() < 0.8) resolve("Water boiled");
      else reject("Failed to boil water");
    }, 1000);
  });
}

// Step 2: Brew Coffee
function brewCoffee() {
  return new Promise((resolve, reject) => {
    console.log("Brewing coffee...");
    setTimeout(() => {
      if (Math.random() < 0.8) resolve("Coffee brewed");
      else reject("Failed to brew coffee");
    }, 1500);
  });
}

// Step 3: Pour into Cup
function pourCoffee() {
  return new Promise((resolve, reject) => {
    console.log("Pouring coffee into cup...");
    setTimeout(() => {
      if (Math.random() < 0.8) resolve("Coffee poured");
      else reject("Failed to pour coffee");
    }, 1200);
  });
}

// --- Promise Chaining Process ---
boilWater()
  .then((msg) => {
    console.log(msg);
    return brewCoffee();
  })
  .then((msg) => {
    console.log(msg);
    return pourCoffee();
  })
  .then((msg) => {
    console.log(msg);
    console.log("Coffee ready for the team!");
  })
  .catch((err) => {
    console.log("❌ Process failed:", err);
  });
