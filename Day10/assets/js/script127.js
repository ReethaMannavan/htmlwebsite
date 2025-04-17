//  JS127. Create a button that disappears when clicked. 


const btn= document.getElementById("btn");

btn.addEventListener('click', ()=>{

    btn.style.visibility = "hidden";
}
)