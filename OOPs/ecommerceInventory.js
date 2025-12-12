const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 40000, stock: 5 },
  { id: 2, name: "Shoes", category: "Fashion", price: 2000, stock: 20 },
  { id: 3, name: "TV", category: "Electronics", price: 30000, stock: 2 }
];

function getLowStockProducts() {
  return products.filter(p => p.stock < 5);
}

function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

function groupByCategory() {
  return products.reduce((group, p) => {
    if (!group[p.category]) group[p.category] = [];
    group[p.category].push(p);
    return group;
  }, {});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
