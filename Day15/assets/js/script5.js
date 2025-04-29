// 5. Create a function that throws a TypeError if input is not a number. 

function checkAge(age) { 
  if (!age.isInteger === true ) { 
  throw new Error("Age Must be in number");
  } 
  return "Access Granted"; 
  } 
  try { 
  console.log(checkAge('hi')); 
  } catch (error) { 
  console.log("Error:", error.message); 
  }