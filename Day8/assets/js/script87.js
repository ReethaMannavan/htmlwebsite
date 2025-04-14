//  JS87. Use prototype to add a new method to a constructor function dynamically.

function Animal(name) {
    this.name = name;
  }
  
  // Add a method to the prototype
  Animal.prototype.makeSound = function() {
    console.log('The animal makes a sound.');
  };
  
  // Create an instance of the Animal object

  const dog = new Animal('Dog');
  dog.makeSound(); 
  
  // Dynamically update the prototype

  Animal.prototype.makeSound = function() {
    console.log(`${this.name} barks.`);
  };
  
  dog.makeSound(); 