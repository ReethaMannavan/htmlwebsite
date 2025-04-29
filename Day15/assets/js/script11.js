// 11. Use finally to execute cleanup code even if an error occurs.

try { 
    let x = 10 / 0; 
    } catch (error) { 
    console.log("Error:", error.message); 
    } finally { 
    console.log("Execution completed!"); 
    } 