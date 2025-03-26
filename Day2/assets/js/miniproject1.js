// 1. Voting Eligibility System 

let age = 21;
let citizen = "India";
let eligible = (age>=18 && citizen === "India")
?console.log("Age is:", age , "\nCitizen:", citizen , "\n✅ Eligible to Vote")
:console.log( "❌ Not Eligible to Vote");
    
