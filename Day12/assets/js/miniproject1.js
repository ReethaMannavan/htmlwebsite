// 1. Inventory Management System Requirements 

// 1. Store Product Details: Maintain product ID, name, category, quantity, and 
// price in an array of objects. 
//  2. Check Stock Availability: Allow searching for a product by ID or name to 
// check stock status. 
//  3. Update Inventory: Enable adding or removing stock when new shipments 
// arrive or products are sold. 
//  4. Calculate Total Inventory Value: Compute the total worth of all products in 
// stock. 


let products = [
  {ProductID : 101 , name: "iPhone", category:"Electronics", quantity: 20, price:100000},
  {ProductID : 102 , name: "Hp Laptop", category:"Electronics", quantity: 10, price:50000},
  {ProductID : 103 , name: "iPad", category:"Electronics", quantity: 15, price:40000},
  {ProductID : 104 , name: "iWatch", category:"Electronics", quantity: 30, price:35000},
];



// ----------Checking Stock Availability-----------

let product1 = products.filter(p => p.ProductID === 103); 
console.log(product1);




// -----adding a new product-------------

let updateProduct =  [...products,  {ProductID : 107 , name: "LG TV", category:"Electronics", quantity: 30, price:65000}] 
console.log(updateProduct);



// -----removing a product-------------

let rem = products.findIndex(product => product.ProductID === 104);
if (rem !== -1) {
  products.splice(rem, 1);
}

console.log(products);


// -------Calculating Total Inventory Value---------

let TotalValue = products.reduce((n, {price}) => n + price, 0);

console.log(`Total Inventory value is ${TotalValue}`);



