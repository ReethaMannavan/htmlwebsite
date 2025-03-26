// JS25. Implement a "Buy 1 Get 1 Free" condition using if and &&.

let product1 = 1;
let product2 = 0;
let total = product1 + product2;
console.log("Total items are in the cart:", total);

let offer  = product1 && total
?console.log("Buy 1 Get 1 free")
:console.log("Offer not valid");

