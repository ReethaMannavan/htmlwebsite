// 2. Catch and handle a Reference Error when trying to use an undefined variable. 

try { 
    let x = y + 10; 
    } catch (error) { 
    console.log("An error occurred:", error.message); 
    }