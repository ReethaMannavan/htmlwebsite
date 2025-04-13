// JS86. Create a Student constructor with an array property grades and a method to calculate the average grade. 

function Student(name,  rollnumber, grades = []) {
    this.name = name;
    this.rollnumber = rollnumber;
    this.grades = grades;
    this.average = function() {
      return this.grades.reduce((prev , curr) => prev + curr, 0) / this.grades.length
    }
  }
  
  let student1 = new Student("Daryl", 4, [35, 45, 70]);
  console.log("Average: ", student1.average())
  

