//  JS89. Implement inheritance in constructor functions where a Manager extends an Employee constructor. 


class Employee { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Manager extends Employee {

}

let employee1 = new Manager('Jack');
employee1.greet();

