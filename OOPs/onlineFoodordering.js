const menu = {
  burger: 100,
  pizza: 250,
  coffee: 80,
  fries: 60
};

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map(item => {
      if (!menu[item]) throw new Error(`Item not found: ${item}`);
      return menu[item];
    });

    const total = prices.reduce((sum, p) => sum + p, 0);
    return `Total Bill: ₹${total}`;
  } catch (err) {
    return err.message;
  }
}

console.log(calculateBill(["burger", "pizza"]));
console.log(calculateBill(["coffee", "unknown"]));
