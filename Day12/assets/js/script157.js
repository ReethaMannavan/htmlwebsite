// JS157. Display the highest-priced product in an array.

let items = [
  {
    itemName: "Effective Programming Habits",
    type: "book",
    price: 13.99
  },
  {
    itemName: "Chromebook 2",
    type: "computer",
    price: 399.99
  },
 {
    itemName: "Programming 101",
    type: "book",
    price: 15.00
  } 
];


let maxItem = items.reduce((max, min) => max.price > min.price ? max : min);

console.log(maxItem.itemName) 
console.log(maxItem) 