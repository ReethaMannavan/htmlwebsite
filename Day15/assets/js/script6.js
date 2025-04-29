// 6. Implement nested try...catch blocks to handle multiple errors. 

function checkAge(age) {
  if (!age.isInteger === true) {
    throw new Error("Age Must be in number");
  }

 else if(age < 18){
  throw new Error("Age should be greater than 18");
 }

  }


try {
console.log(checkAge("hi"));

  try{
  console.log(checkAge(16));
 
}
finally{

}
}

catch (error) {
  console.log("Error:", error.message);
}
