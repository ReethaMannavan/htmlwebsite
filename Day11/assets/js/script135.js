// JS135. Store and retrieve session-based login status using SessionStorage.

function checkSession() { 
    let user = sessionStorage.getItem("user"); 
    document.getElementById("status").innerText = user ? "Logged In" : "Logged Out"; 
    } 
     
    document.getElementById("login").addEventListener("click", function() { 
    sessionStorage.setItem("user", "Logged In"); 
    checkSession(); 
    }); 
     
    document.getElementById("logout").addEventListener("click", function() { 
    sessionStorage.removeItem("user"); 
    checkSession(); 
    }); 
     
    checkSession(); 