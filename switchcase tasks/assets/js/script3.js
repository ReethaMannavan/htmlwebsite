// Task 3: Determine Type of Vehicle Based on Number of Wheels Scenario:

let vehicle = parseInt(prompt("Enter the Number:"));

switch (vehicle) {
    case 2:
        console.log("Bicycle or Motocycle");

        break;
    case 4:
        console.log("Car");
        break;
    case 6:
        console.log("Truck");
        break;

    default:
        console.log("Invalid");

        break;
}