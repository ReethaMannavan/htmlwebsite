// 2. Student Record Management System 

const studentrecord = [
    {name:"Rick", age:18, marks:[78,97,88]},
    {name:"peter", age:18, marks:[88,79,77]},
    {name:"paul", age:18, marks:[62,67,89]},
    {name:"lisa", age:18, marks:[87,65,75]}
  
];

studentrecord.forEach(studentrecord => { 
    let avgMarks = studentrecord.marks.reduce((sum, mark) => sum + mark,0) / studentrecord.marks.length; 
    console.log(`${studentrecord.name} => Average Marks: ${Math.floor(avgMarks)}`); 
    }); 
    











