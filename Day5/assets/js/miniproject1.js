// 1. Student Grade Calculator 

    let chemistry = parseFloat(prompt("chemistry:"));
    let english = parseFloat(prompt("English:"));
    let maths = parseFloat(prompt("Mathematics:"));
    let physics = parseFloat(prompt("Physics:"));

    
    

function calculate(){

    let totalMarks = chemistry + english + maths + physics;
    let percentage = (totalMarks / 400) * 100;
    let grade = "";

   
    if (percentage > 90 && percentage < 100) {
        grade = "A";
    } else if (percentage >=75 && percentage <=89) {
        grade = "B";
    } else if (percentage >=50 && percentage <=74) {
        grade = "C";
    } else if (percentage < 50 ){
        grade = "F";
    }
    else{
        console.log("Invalid");
        
    }
  
    let result = grade;
    console.log("Your TotalMarks are:", totalMarks);
    console.log("Average is:", percentage);
    console.log("Your Grade is:", result);
  
}
calculate();









