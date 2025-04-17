// JS131. Change an image when a button is clicked.



const myImg = document.getElementById("myImg");
const myButton = document.getElementById("myButton");

let isFirstImage = true;

myButton.addEventListener("click", function() {
  if (isFirstImage) {
    myImg.src = "./assets/images/Signup page image.jpg";
  } else {
    myImg.src = "./assets/images/phone image.png";
  }
  isFirstImage = !isFirstImage;
});