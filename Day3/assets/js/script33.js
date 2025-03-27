// JS33. Use a switch statement to print messages for different days.

let day = String(prompt("Enter the Day :"));

switch (day) {
    case "Monday":
        console.log("First day Of the Week!");
        break;
        case "Friday":
        console.log("Weekend Starts Tomorrow!");
        break;
        case "Sunday":
        console.log("Today is a Holiday!");
        break;

    default:
        console.log("Just a Normal day");
        
        break;
}