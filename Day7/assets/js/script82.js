// JS82. Modify the Car constructor to include a method that calculates the car's age. 


function Car(brand, model, year) { 
    this.brand = brand; 
    this.model = model; 
    this.year = year;
    this.displayInfo = function() { 
        return `${this.brand} ${this.model} ${this.year}`; 
    }; 
} 

const d = new Date();
let year = d.getFullYear();
let myCar1 = new Car("Tesla", "Model X", 2022); 

console.log(`Car is ${year-myCar1.year} years old`);
