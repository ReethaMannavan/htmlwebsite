// JS30. Use if-else if-else to check grade categories.

let marks = parseInt(prompt("Enter Your Mark to check the grade:"));

if (marks >90 && marks<=100) { 
    console.log("Grade: S"); 
    } else if (marks >= 80 && marks <=90) { 
    console.log("Grade: A"); 
    } else if (marks > 65 && marks <80) { 
    console.log("Grade: C"); 
    } 
    else if (marks <= 65 && marks >=35) { 
        console.log("Grade: D"); 
    }
        else { 
    console.log("You are Failed"); 
    }

