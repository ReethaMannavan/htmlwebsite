// JS161. Store an array of objects in LocalStorage as JSON and retrieve it. 

let students = [
    { name: "Alice", age: 22, grade: "A" },
    { name: "Bob", age: 24, grade: "B" },
    { name: "Charlie", age: 23, grade: "A" }
];

let studentString = localStorage.setItem('sdata', JSON.stringify(students));

let obj = JSON.parse(localStorage.getItem('sdata'));

console.log(obj);
