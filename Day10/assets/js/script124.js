// JS124. Display the coordinates of the mouse pointer when moved. 

const btn = document.getElementById('btn')
const para = document.getElementById('para')

document.body.addEventListener("mousemove", (event) => {
para.innerText = "X:" +event.screenX+ "," + "Y:" + event.screenY;
});

