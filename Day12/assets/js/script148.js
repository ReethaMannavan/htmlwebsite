// JS148. Filter an array to show only students with grade 'A'. 

let students = [
    { name: "Alice", age: 22, grade: "A" },
    { name: "Bob", age: 24, grade: "B" },
    { name: "Charlie", age: 23, grade: "A" }
];

let topStudents = students.filter(student => student.grade === "A");
console.log(topStudents); 