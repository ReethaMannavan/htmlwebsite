// JS152. Count how many objects meet a specific condition. 


let students = [ 
    { name: "Alice", age: 22, grade: "A" }, 
    { name: "Bob", age: 24, grade: "B" }, 
    { name: "Charlie", age: 23, grade: "A" } 
    ]; 

    let topStudents = students.filter(student => student.grade === "A"); 
    console.log(topStudents.length);  