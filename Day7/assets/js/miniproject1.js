// 1. Employee Management System

function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.increase = function (increment) {
      
        return `${salary + increment}`;
    }
};

const employee1 = new Employee("Rick", "Senior Developer", 25000);
const employee2 = new Employee("Daryl", "Junior Developer", 15000);
const employee3 = new Employee("Carol", "Fresher", 12000);



console.table( [employee1,employee2,employee3]);
console.table([employee1.increase(5000),employee2.increase(3000),employee3.increase(1000)]);











