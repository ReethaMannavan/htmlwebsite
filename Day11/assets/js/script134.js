// JS134. Implement a shopping cart that remembers selected items using LocalStorage. 


let products = [ 
{ name: "Laptop", price: 1200 }, 
{ name: "Smartphone", price: 800 }];

let jsonString = JSON.stringify(products);
console.log(jsonString);



let products1 = '{ "name": "Laptop", "price": 1200 }';
let product=JSON.parse(products1);
console.log(product);




