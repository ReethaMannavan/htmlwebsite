// Find a specific product in an array by name.

let products = [ 
  { id: 1, name: "Laptop", price: 75000, category: "Electronics", stock: 10 }, 
  { id: 2, name: "Headphones", price: 2500, category: "Accessories", stock: 50 }, 
  { id: 3, name: "Smartphone", price: 45000, category: "Electronics", stock: 20 }, 
  { id: 4, name: "Shoes", price: 3000, category: "Fashion", stock: 100 } 
  ]; 

  let product = products.find(p => p.name === "Laptop"); 
console.log("Product Found:", product); 

