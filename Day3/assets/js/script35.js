// JS35. Check if a user is logged in using &&. 

let isLoggedin = true;
let isAdmin = false;

if (isLoggedin == true && isAdmin == true) {
    console.log("Welcome Admin");

}
else if(isLoggedin == true && isAdmin == false){
    console.log("Welcome User");
    
}
else {
    console.log("Plese Login.");
    
}