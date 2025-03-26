// JS24. Use || to allow login using email or phone number. 

let email = "nisha.reetha30@gmail.com";
let phno = 9786553503;
let allow = (email || phno)
?console.log("Login now")
:console.log("Enter mailid or pwd to login");

