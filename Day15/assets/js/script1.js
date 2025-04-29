// 1. Write a program that handles a syntax error using try...catch. 


try {
    eval("alert('Hello)");   
  }
  catch(err) {
console.log("An error Occured :", err.message);

  }
