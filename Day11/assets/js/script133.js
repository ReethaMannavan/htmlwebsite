// JS133. Save and load dark/light mode settings using LocalStorage. 

function loadTheme() { 
   let theme = localStorage.getItem("theme"); 
   if (theme === "dark") { 
   document.body.classList.add("dark-mode"); 
   }
}
    
function toggleTheme() { 
   document.body.classList.toggle("dark-mode"); 
   let theme = document.body.classList.contains("dark-mode") ? "dark" : "light"; 
   localStorage.setItem("theme", theme); 
   } 
   document.getElementById("toggleTheme").addEventListener("click", 
   toggleTheme); 
   loadTheme(); 