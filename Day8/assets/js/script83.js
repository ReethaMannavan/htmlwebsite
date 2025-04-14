// JS83. Use this inside a constructor function to refer to an object and modify properties dynamically.

function Animal(type) { 
   
    this.type = type; 
} 
 
let animal1 = new Animal("Dog"); 
console.log(animal1.type);

let animal2 = new Animal("Cat"); 
console.log(animal2.type);
