// JS39. Validate a password length using an if statement. 

//  const validate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/

let password = "123nisha";

let val_length = password.length;

if (val_length > 6 && val_length < 20) {

    console.log("password is valid");
    
    
}
else {
    console.log( "Enter atleast 6 characters and not exceed by 20 characters ");
    
}