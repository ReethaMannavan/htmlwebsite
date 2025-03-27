// JS32. Create a nested if condition to check both login and admin status. 

let isLoggedin = true;
let isAdmin = true;

if (isLoggedin == true) {
    if (isAdmin == true) {
        console.log("Welcome Admin");
        
    }
    else{
        console.log("Wlecome User");
        
    }
}
    else {
        console.log("Plese Login.");
        
    }
