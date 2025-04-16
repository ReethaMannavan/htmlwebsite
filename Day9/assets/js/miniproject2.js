// 2. Stopwatch Timer (Real-World Mini Project) 

const start = document.getElementById("start");
const pause = document.getElementById("stop");
const reset = document.getElementById("reset");
const counter = document.getElementById("counter")



let count=0;


start.onclick = () => {
    c = setInterval(start, 100);
    function start() {
      counter.innerHTML =  count;
      count++;
    }
  
};

pause.onclick = () => {
    clearInterval(c);
  
};

reset.onclick = () => {
  clearInterval(c);
 counter.innerHTML =  0;
};









// let count = 0; 
// const element =function updateCounter() { 
//     count++;

// document.getElementById("counter").innerText = count; 
// }
//  setInterval(element,1000);


// start.addEventListener("click",updateCounter());




// stop.addEventListener("click",(event)=>{
//     event.preventDefault();
//     document.getElementById("counter").innerText = clearTimeout(element);
// });


// reset.addEventListener("click",()=>
// {
//     document.getElementById("counter").innerText = clearInterval(element);
// }

// )