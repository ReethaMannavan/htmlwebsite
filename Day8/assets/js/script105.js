// JS105. Validate if "user123" has at least 5 characters. 

function validateUsername(username) { 
    if (username.length < 5) { 
    return "Username must be at least 5 characters long."; 
    } else { 
    return "username is Valid"; 
    } 
    } 

    console.log(validateUsername("Nisha"));
    console.log(validateUsername("Rita"));
    

