// JS147. Sort an array of objects by age in ascending order. 



let employees = [ 
    { name: "Bob", age: 34, position:"Manager"},
    { name: "Alice", age: 42, position:"Assistant Manager" },  
    { name: "Charlie", age: 23, position:"Clerk" } 
    ]; 
    

let sortingarr = employees.sort((a, b) => a.name.localeCompare(b.name));;
console.log(sortingarr);
