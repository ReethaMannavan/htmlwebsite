//  JS115. Toggle between two different text contents. 





function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "Hello") {
      x.innerHTML = "Hi!";
    } else {
      x.innerHTML = "Hello";
    }
  }