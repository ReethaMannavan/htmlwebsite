// JS23. Write a JavaScript program to apply discounts if a cart total exceeds $50.



let total_price = 180;

let discount = total_price >= 50
?  total_price*0.10
: 0;

let final_price = total_price - discount;
console.log("cart total:$", total_price);
console.log("Discount amount is:$", discount);

console.log("Final Price after discount :$", final_price);

