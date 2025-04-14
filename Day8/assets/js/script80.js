// JS80. Add a method to the Person constructor that returns a greeting message. 

function Person(name, age) { 
    this.name = name; 
    this.age = age; 
    this.greet = function()
    { 
        return `Hi, Welcome ${this.name} !`;
}

}

let person1 = new Person("Rick", 25); 

console.log(person1.greet());


