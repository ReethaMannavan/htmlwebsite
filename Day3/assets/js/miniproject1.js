// Simple Login System 


let mail_validate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let pwd_validate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/
let mail = String(prompt("Enter Mail id: "));
let pwd = String(prompt("Enter password: "));


if (mail_validate.test(mail)) {
    if (pwd_validate.test(pwd)) 
        {
        console.log("Login Successful");
        
    }
    else{
        console.log("Invalid Credentials! Password is Incorrect. \nPassword must Contains one numerical digit,\none lower case of alphabet,\none uppercase of alphabet and \none special character");
        
    }
}
    
else{
    console.log("Mailid is incorrect \nit must be in the following format: test@example.com");
    
}
    
   


