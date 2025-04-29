//  9. Implement a debugger breakpoint inside a loop 


try{
  
  for (i = 1; i > 0; i++) {
  {debugger};
  console.log(i);
}
}
catch (error) { 
  console.error("Error:", error.message); 
  }
  finally {
    console.log("Execution completed!");
  }
 





