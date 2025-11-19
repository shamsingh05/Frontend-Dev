
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = 0;

for (let product of cart) {
    let discountedPrice = product.price;

    if (product.category === "electronics") {
        discountedPrice -= product.price * 0.10; 
    } else if (product.category === "fashion") {
        discountedPrice -= product.price * 0.05; 
    }

    total += discountedPrice;
}

console.log(`Total after category discounts: ₹${total.toFixed(2)}`);

if (total > 50000) {
    total -= total * 0.05;
    console.log("Extra 5% discount applied for cart total > ₹50,000");
}

console.log(`Final Total: ₹${total.toFixed(2)}`);


