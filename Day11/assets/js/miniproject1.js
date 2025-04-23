//1: Stopwatch with SessionStorage 

const start = document.getElementById("start");
const pause = document.getElementById("stop");
const reset = document.getElementById("reset");
const counter = document.getElementById("counter")



let count=0;


start.onclick = (event) => {
  event.preventDefault();
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
