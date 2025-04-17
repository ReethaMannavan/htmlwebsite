// JS123. Toggle a password field between text and password.


const checkbox = document.getElementById('checkbox')

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


checkbox.addEventListener('click', myFunction);