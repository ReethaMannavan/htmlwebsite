// JS121. Detect when the user presses the "Enter" key. 

document.getElementById("inputBox").addEventListener("keyup", 
    function(event) { 
    document.getElementById("keyInfo").innerText = "Key Pressed: " + 
    event.key; 
    }); 