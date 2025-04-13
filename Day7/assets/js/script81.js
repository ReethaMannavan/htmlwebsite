// JS81. Create a Car constructor with brand, model, and year, and display the details. 

function Car(brand, model, year) { 
    this.brand = brand; 
    this.model = model; 
    this.year = year;
    this.displayInfo = function() { 
        return `${this.brand} ${this.model} ${this.year}`; 
    }; 
} 
 
let myCar1 = new Car("Tesla", "Model X", 2022); 
console.log(myCar1.displayInfo()); 

let myCar2 = new Car("Pajero", "MonterraSports", 2023); 
console.log(myCar2.displayInfo()); 