// JS113. Add a border to an image when hovered. 

let image = document.getElementById("image");

image.addEventListener("mouseover",()=>{
    image.style.border = "solid blue";
});