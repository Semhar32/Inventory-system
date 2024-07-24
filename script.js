// Sample inventory data
const inventory = [
    { id: 1, name: 'Laptop', category: 'Electronics', quantity: 10, price: 1000 },
    { id: 2, name: 'Phone', category: 'Electronics', quantity: 20, price: 500 },
    { id: 3, name: 'Shirt', category: 'Apparel', quantity: 50, price: 30 },
    { id: 4, name: 'Pants', category: 'Apparel', quantity: 40, price: 40 },
    { id: 5, name: 'Shoes', category: 'Apparel', quantity: 30, price: 60 }
];

// Function to add a new item to the inventory
function addItem(item) {
    inventory.push(item);
}

// Function to update an existing item in the inventory
function updateItem(id, updatedItem) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory[index] = { ...inventory[index], ...updatedItem };
    }
}

// Function to delete an item from the inventory
function deleteItem(id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
    }
}

// Function to filter items by category
function filterByCategory(category) {
    return inventory.filter(item => item.category === category);
}

// Function to filter items by minimum quantity
function filterByMinQuantity(minQuantity) {
    return inventory.filter(item => item.quantity >= minQuantity);
}

// Function to get an array of item names using map
function getItemNames() {
    return inventory.map(item => item.name);
}

// Function to calculate the total value of the inventory
function calculateTotalValue() {
    return inventory.reduce((total, item) => total + (item.quantity * item.price), 0);
}

// Function to print all items using forEach
function printInventory() {
    inventory.forEach(item => {
        console.log(`ID: ${item.id}, Name: ${item.name}, Category: ${item.category}, Quantity: ${item.quantity}, Price: $${item.price}`);
    });
}

// Testing the functions
addItem({ id: 6, name: 'Tablet', category: 'Electronics', quantity: 15, price: 300 });
updateItem(1, { quantity: 8 });
deleteItem(2);
console.log(filterByCategory('Apparel'));
console.log(filterByMinQuantity(20));
console.log(getItemNames());
console.log(`Total Inventory Value: $${calculateTotalValue()}`);
printInventory();
