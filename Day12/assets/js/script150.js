// JS150. Convert an array of objects to only an array of names. 


let students = [
    { name: "Alice", age: 22, grade: "A" },
    { name: "Bob", age: 24, grade: "B" },
    { name: "Charlie", age: 23, grade: "A" }
];

let studentNames = students.map(student => student.name);
console.log(studentNames); 