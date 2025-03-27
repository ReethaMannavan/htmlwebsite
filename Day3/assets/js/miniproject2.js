// 2. Traffic Light System 

let light_color = String(prompt("Enter color: "));

switch (light_color) {
    case "Red":
        console.log("STOP!");
        break;

    case "Yellow":
        console.log("Slow Down!");
        break;

    case "Green":
        console.log("GO!");
        break;

    default:
        console.log("Invalid Color");
        break;
}