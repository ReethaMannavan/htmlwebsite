//  8. Debug an application using console.warn() and console.error(). 

function logError(message) { 
    console.error("Error Logged:", message); 
    } 
     
    try { 
    let x = undefined; 
    console.log(x.toUpperCase()); 
    } catch (error) { 
    logError(error.message); 
    } 
    