// JS19. Use && to check if a user has a valid email and password. 




function valid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
const email = "example@domain.com";
let number = 123456789;
console.log(valid(email) && number ? "Valid email address and password" : "Invalid");