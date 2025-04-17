//  JS128. Toggle an element's visibility when another element is clicked. 



const btn = document.getElementById('btn');

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

btn.addEventListener('click',myFunction);