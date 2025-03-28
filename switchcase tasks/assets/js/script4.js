// Task 4: Menu Selection in a Restaurant

let menu_item = String(prompt("Enter the dish name:"));

switch (menu_item) {
    case "Tandoori":
        console.log("Tandoori dishes are known for their distinguished aroma and taste, and are not curry dishes.  Chicken, lamb or king prawn marinated in a yoghurt, mint sauce, spices and herbs, then skewered and cooked in a traditional clay oven over charcoal.  These dishes are served in a sizzled dish with mint sauce and fresh green salad.");
        break;
        case "Briyani":
            console.log("Briyani dishes are cooked with Basmati rice, coconut powder and special spices, according to India's best Biriani recipe.  They are served with medium or hot vegetable curry, according to your choice.");
            break;
            case "Chicken Curry":
                console.log("The chicken used in this dish is first half cooked in a clay oven and then cooked with a very pleasant flavour sauce and spices. ");
                break;
              
    default:
        console.log("Invalid Input");
        
        break;
}