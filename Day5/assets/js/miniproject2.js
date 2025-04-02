// 2. Grocery Shopping List

let grocery = [ 
    { product: "Rice", quantity: 2 }, 
    { product: "salt", quantity: 500 } 
   
    ]; 
function additem(productname, qty){
    grocery.push({product:productname, quantity:qty});

}
function removeitem(productName) { 
    grocery = grocery.filter(item => item.product !== productName); 
    }

additem("Milk",1);
removeitem("Rice");
console.log(grocery);






