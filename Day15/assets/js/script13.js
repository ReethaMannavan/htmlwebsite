// 13. Implement a real-world error logging system using LocalStorage. 

function logError(message) { 
    console.error("Error Logged:", message); 
    localStorage.setItem("errorLog", message); 
    } 
     
    try { 
    let x = undefined; 
    console.log(x.toUpperCase()); 
    } catch (error) { 
    logError(error.message); 
    } 
