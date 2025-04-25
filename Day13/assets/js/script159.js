// JS159. Convert a JSON string back to a JavaScript object using JSON.parse().

let student = [ 
    { name: "Alice", age: 22, grade: "A+" }, 
    { name: "Charlie", age: 23, grade: "A" }, 
    { name: "Bob", age: 24, grade: "B" } 
    ] ;


let studentstring = JSON.stringify(student);

let studentObj = JSON.parse(studentstring);

console.log(studentObj);

