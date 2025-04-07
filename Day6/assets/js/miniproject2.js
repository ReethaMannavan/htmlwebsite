// 2. Product Inventory System

let groceryProducts = [
    {product:"rice", quantity:30},
    {product:"milk", quantity:80},
    {product:"toothpaste", quantity:30},

];

function addproduct(productname,qty){
groceryProducts.push({product:productname,quantity:qty});

}

function removeproduct(productname){
    groceryProducts = groceryProducts.filter(item=>item.product!==productname);
}

addproduct("Shampoo", 50);
removeproduct("milk");

console.log(groceryProducts);





