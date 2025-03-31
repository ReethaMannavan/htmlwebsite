// JS45. Iterate over an object and print its properties using a for...in loop. 

let student = { name: "Nisha",
     age: 30, 
     course: "Python" 
    }; 
for (let key in student) { 
console.log(key + ":", student[key]); 
} 