

let totalPurchase = 7200;  // input amount

let discount = 0;

if (totalPurchase >= 10000) {
    discount = 0.25;
}
else if (totalPurchase >= 5000) {
    discount = 0.15;
}
else if (totalPurchase >= 2000) {
    discount = 0.05;
}
else {
    discount = 0;
}

let discountAmount = totalPurchase * discount;
let finalAmount = totalPurchase - discountAmount;

console.log("Total Purchase: ₹" + totalPurchase);
console.log("Discount Applied: " + (discount * 100) + "%");
console.log("Discount Amount: ₹" + discountAmount.toFixed(2));
console.log("Final Amount to Pay: ₹" + finalAmount.toFixed(2));


let roundedDiscountAmount = Math.round(discountAmount);
let roundedFinalAmount = Math.round(finalAmount);

console.log("Original Total: ₹" + totalPurchase);
console.log("Discount Percentage: " + (discount * 100) + "%");
console.log("Final Price After Discount: ₹" + roundedFinalAmount);
