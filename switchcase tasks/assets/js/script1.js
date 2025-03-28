// Task 1: Calculate Discounts Based on Membership Level

let Membership_level = String(prompt("Enter Membership Level: "));
let total_amount = 5000;
switch (Membership_level) {
    case "Bronze":
        var dis_percentage = 0.05;
        var discount = total_amount * dis_percentage;
        console.log("Discount Percentage is :", dis_percentage);
        console.log("Final Amount after discount is:", total_amount - discount);
        break;
    case "Silver":
        dis_percentage = 0.10;
        discount = total_amount * dis_percentage;
        console.log("Discount Percentage is :", dis_percentage);
        console.log("Final Amount after discount is:", total_amount - discount);
        break;
    case "Gold":
        dis_percentage = 0.15;
        discount = total_amount * dis_percentage;
        console.log("Discount Percentage is :", dis_percentage);
        console.log("Final Amount after discount is:", total_amount - discount);
        break;
    case "Platinum":
        dis_percentage = 0.20;
        discount = total_amount * dis_percentage;
        console.log("Discount Percentage is :", dis_percentage);
        console.log("Final Amount after discount is:", total_amount - discount);
        break;

    default:
        console.log("You're not eligible to avail a discount");
        break;
}