// JS108. Hide and show an element using a toggle button.

function toggle(){
    let head = document.getElementById("head");
    head.style.display = head.style.display === "none" ? "block" : "none";

}

let btn = document.getElementById("toggleBtn");


btn.addEventListener("click", toggle());