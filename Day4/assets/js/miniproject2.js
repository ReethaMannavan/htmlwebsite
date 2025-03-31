// 2. Sum of Digits of a Number 



let number = prompt("Enter Number:");
let sum = 0;

while (number > 0 ){
  
  sum += number % 10;
    number = Math.floor(number/10);
  
  }
  console.log(sum);
  


