// JS158. Convert a JavaScript object to a JSON string using JSON.stringify(). 

let student = [ 
    { name: "Alice", age: 22, grade: "A+" }, 
    { name: "Charlie", age: 23, grade: "A" }, 
    { name: "Bob", age: 24, grade: "B" } 
    ] ;


let studentstring = JSON.stringify(student);

console.log(studentstring);



