// User Registration Form with Validation & Error Handling 


document.getElementById("loginForm").addEventListener("submit", 
    function(event) { 
    event.preventDefault(); 
    try { 
    let username = document.getElementById("username").value; 
    let password = document.getElementById("password").value; 
    let mail = document.getElementById('email').value;
    if (!username || !password || !mail) { 
    throw new Error("All fields are required!"); 
    } 
    alert("Login successful!"); 
    } catch (error) { 
    document.getElementById("errorMessage").innerText = error.message; 
    } 
    }); 