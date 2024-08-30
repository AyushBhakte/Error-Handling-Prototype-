// Main function that takes an array of products and returns a filtering function
function filterByCategory(products) {
    // The returned function will filter products by the provided category
    return function(category) {
        // Use the filter() method to return a new array with products matching the category
        return products.filter(product => product.category === category);
    };
}

// Example usage:
var products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
];

// Create a filter function for "Clothing" category
var clothingProducts = filterByCategory(products)("Clothing");

console.log(clothingProducts);

// Expected Output:
// [
//     { name: "Shirt", category: "Clothing" },
//     { name: "Pants", category: "Clothing" }
// ]
