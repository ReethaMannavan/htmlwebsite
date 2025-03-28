// Task 2: Determine the Season Based on the Month

let season = parseInt(prompt("Enter the Number: "));

switch (season) {
    case 2:
    case 3:
        var current_season = "Spring Season";
        console.log(`February - March => ${current_season}  `);
        break;

    case 3:
    case 4:
    case 5:
        var current_season = "Summer Season";
        console.log(`March - May => ${current_season}  `);
        break;
    case 6:
    case 7:
    case 8:
    case 9:
        var current_season = "Monsoon Season";
        console.log(`June - September => ${current_season}  `);
        break;
    case 10:
    case 11:
        var current_season = "Autumn Season";
        console.log(`October - November => ${current_season}  `);
        break;
    case 12:
    case 1:
        var current_season = "Pre-Winter Season";
        console.log(`December - January => ${current_season}  `);
        break;
    case 1:
    case 2:
        var current_season = "Winter Season";
        console.log(`January - February => ${current_season}  `);
        break;

    default:
        console.log("Invalid");
        
        break;
}