// JS79. Create a Person constructor with properties name and age, and create multiple instances. 

function Person(name, age) { 
    this.name = name; 
    this.age = age; 
} 

let person1 = new Person("Rick", 25); 
console.log(`The person name is => ${person1.name} and age is => ${person1.age}`);

let person2 = new Person("Daryl", 28); 
console.log(`The person name is => ${person2.name} and age is => ${person2.age}`);

let person3 = new Person("Carol", 30); 
console.log(`The person name is => ${person3.name} and age is => ${person3.age}`);
