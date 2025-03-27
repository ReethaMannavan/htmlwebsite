// JS31. Check if a person is eligible for a driver's license

let person_age = parseInt(prompt("Enter Your Age:"));

if (person_age>=18 && person_age <=100) {

   console.log("You are Eligible to get a License");
   
   
}
else if(person_age>100){
   console.log("You are Not Eligible to get a License");
}
else {
   console.log("You are Not Eligible");
   
}


 