// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity = 200;
Object.assign(inventory, {orange: {price: 20, quantity: 300}});

const items = Object.values(inventory);
console.log(items);

let totalInventoryValue = 0;
for (let i = 0; i < items.length; i++) {
  totalInventoryValue += items[i].price * items[i].quantity;
}

console.log(`Total inventory value: ${totalInventoryValue} baht`); // Output: Total Cost: 

