// 1. Light/Dark Mode Toggle 

let btn = document.getElementById('btn');
var element = document.body;

// btn.addEventListener('click',()=>{

//   element.style.backgroundColor = "black";
// })

btn.addEventListener('click',()=>{
element.classList.toggle("dark-mode");
})
