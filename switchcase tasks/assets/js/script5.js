// Task 5: Day of the Week Planner

let day = String(prompt("Enter the day:"));

switch (day) {
    case "Monday":
        console.log("Plan Tasks for the Week\nComplete Weekly Review\nRespond to Emails");
        break;

    case "Tuesday":
        console.log("Attend Team Meeting\nWork on Project A\nResearch Industry Trends");
        break;

    case "Wednesday":
        console.log("Client Meeting at 10.00AM\nUpdate Project A Status\n");
        break;

    case "Thursday":
        console.log("FollowUp with Clients\nReview Projects\nAttend online Webinar");
        break;
    case "Friday":
        console.log("Finalize reporst for the week\nCollaborate with Team Members\nShedule Meeting");
        break;
    case "Saturday":
        console.log("Excercise or Physical Activity\nGrocery Shopping\nPersonal Development Reading");
        break;
    case "Sunday":
        console.log("Relax and Watching Tv\nPlan Personal Activities");
        break;

    default:
        console.log("Invalid Input");

        break;
}