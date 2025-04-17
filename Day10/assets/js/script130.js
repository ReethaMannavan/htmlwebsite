// JS130. Display a loading animation when the page is loading. 


document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("load", () => {
      const loadingOverlay = document.getElementById("loadingOverlay");
      const content = document.querySelector(".content");
  
     
      loadingOverlay.style.opacity = "0";
      loadingOverlay.style.transition = "opacity 0.5s ease";
  
    
      setTimeout(() => {
        loadingOverlay.style.display = "none";
        content.style.display = "block";
      }, 2000);
    });
  });
