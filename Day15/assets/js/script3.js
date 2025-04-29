// 3. Use try...catch to handle division by zero error.


 
 

 
try { 
let x = 10 / 0; 
} catch (error) { 
console.log("Error:", error.message); 
}
finally { 
  console.log("Execution completed!"); 
  } 