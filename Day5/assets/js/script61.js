// JS61. Write a function to calculate the simple interest. 

let principal = 12000;
let time = 2;
let rateofinterest = 5;

function simpleint(p,t,r){

   return (p*t*r)/100;
}

let simpleinterest = simpleint(principal, time, rateofinterest);
console.log("Simple interest is:", simpleinterest);

