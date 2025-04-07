// 1. Movie Booking System 

let moviesname = ["Dragon", "Vidamuyarchi","Veera Dheera Sooran", "L2:Empuraan"];

const user_input = prompt("Enter the Movie Name:");

const booking = (moviename => moviename == user_input);
console.log(moviesname.some(booking));
console.log(`Ticket is Booked`);



// function booking()
// {
//     if( user_input == "Dragon" || user_input == "Vidamuyarchi" || user_input == "Veera Dheera Sooran" || user_input == "L2:Empuraan" )
//         console.log(`${user_input} is Booked.`);
//     else{
//         console.log(`This Movie is Not Available`);
        
//     }
        
// }

// booking();





