// JS85. Implement default values in a constructor function when no parameters are provided. 

function User() { 
    this.name = "admin"; 
} 
 
let adminUser = new User(); 
console.log(adminUser.name); 